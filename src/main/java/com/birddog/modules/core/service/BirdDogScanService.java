package com.birddog.modules.core.service;

import com.birddog.BirddogUtil;
import com.birddog.modules.core.api.BirdDogDataApi;
import com.birddog.modules.core.model.BirddogTool;
import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.core.model.customer.CustomerDomainStatus;
import com.birddog.modules.core.model.messaging.ScanWsMessage;
import com.birddog.modules.core.model.scan.*;
import com.birddog.modules.core.rest.ScanWebSocket;
import com.birddog.modules.tools.dig.DigClient;
import com.birddog.modules.tools.dig.model.DigEntry;
import com.birddog.modules.tools.nmap.NmapCLient;
import com.birddog.modules.tools.openvas.OpenVasClient;
import com.birddog.modules.tools.openvas.model.OpenvasScanStatus;
import com.birddog.modules.tools.subfinder.SubfinderClient;
import com.birddog.modules.tools.subfinder.model.SubfinderSubDomain;

import javax.inject.Singleton;
import java.io.IOException;
import java.util.Date;
import java.util.List;

@Singleton
public class BirdDogScanService {

    //used to broadcast progress so clients can see
    private final ScanWebSocket webSocket;

    //you know the api we use to deal with the data
    private final BirdDogDataApi birdDogDataApi;

    //subfinder client
    private final SubfinderClient subfinderClient;

    //client for dig commands
    private final DigClient digClient;

    //used to run nmap against hosts
    private final NmapCLient nmapCLient;

    //open vas client for creating targets and such
    private final OpenVasClient openVasClient;


    /***
     *  @param webSocket
     * @param birdDogDataApi
     * @param subfinderClient
     * @param digClient
     * @param nmapCLient
     * @param openVasClient
     */
    public BirdDogScanService(ScanWebSocket webSocket, BirdDogDataApi birdDogDataApi, SubfinderClient subfinderClient, DigClient digClient, NmapCLient nmapCLient, OpenVasClient openVasClient) {
        this.webSocket = webSocket;
        this.birdDogDataApi = birdDogDataApi;
        this.subfinderClient = subfinderClient;
        this.digClient = digClient;
        this.nmapCLient = nmapCLient;
        this.openVasClient = openVasClient;
    }

    /***
     * Scan a customer and a root domain
     * @param host
     * @throws IOException
     */
    public void scan(Customer customer, String host) throws IOException {

        BirddogUtil.debug("SCANNER", "SCANNING", "%s %s", host, customer.getId());


        //Create a new scan job and mark it as in progress
        var scanJob = new ScanJob(customer, ScanJobStatus.RUNNING);
        birdDogDataApi.insert(scanJob);

        //WS
        this.webSocket.broadcast(new ScanWsMessage(new Date(), "localhost", "SCANJOB", String.format("%s", scanJob)));

        //get the subfinder results for the host
        var subfinderResults = subfinderClient.execute(List.of(host));

        //Iterate the subfinder results
        for (var statusEntry : subfinderResults.getStatuses().entrySet()) {

            /**
             * Process the results based on the status
             */
            switch (statusEntry.getValue()) {
                case COMPLETE -> {
                    for (var subFound : subfinderResults.getResults().get(statusEntry.getKey())) {
                        processSubFinder(customer, scanJob, subFound);
                    }
                }
                case ERROR -> BirddogUtil.debug("SUBFINDER", "ERROR", "%s", statusEntry);
            }
        }

        //Complete the scan job
        birdDogDataApi.completeScanJob(scanJob.getId(), new Date());
    }


    /**
     * @param customer
     * @param scanJob
     * @param subFound
     * @return
     * @throws IOException
     */
    public ScanDomain processSubFinder(Customer customer, ScanJob scanJob, SubfinderSubDomain subFound) throws IOException {

        BirddogUtil.debug("SUBFINDER", "DIGGING", "%s %s", customer.getName(), subFound.getHost());

        int portsFound = 0;

        this.webSocket.broadcast(new ScanWsMessage(new Date(), "localhost", "SUBFINDER", String.format("%s", subFound)));

        //Create a new scan domain based on the subfinder output and upsert that into the db
        var scanDomain = new ScanDomain(scanJob, BirddogTool.NMAP, subFound.getHost(), CustomerDomainStatus.FOUND, subFound.getSource());
        birdDogDataApi.insert(scanDomain);

        //execute the dig command
        var digResults = digClient.execute(subFound.getHost());

        //Iterate over the results from dig
        for (var dug : digResults) {
            portsFound += processDigEntry(scanJob, scanDomain, customer, dug);
        }

        //Update the scan domin to indicate the number of active ports we found
        birdDogDataApi.updateScanDomain(scanDomain.getId(), portsFound);

        return scanDomain;
    }

    /***
     *
     * @param scanJob
     * @param scanDomain
     * @param customer
     * @param dug
     * @return
     */
    public int processDigEntry(ScanJob scanJob, ScanDomain scanDomain, Customer customer, DigEntry dug) throws IOException {

        BirddogUtil.debug("DIG", "NMAPPING", "%s %s", customer.getName(), dug.getIpAddress());

        //execute an namep command on the dig entry
        var result = nmapCLient.executeNmap(scanJob, scanDomain, dug);

        //insert the host detail
        var scanHost = birdDogDataApi.insert(result.getHost());
        BirddogUtil.debug("SCAN_HOST", "INSERTED", "%s", scanHost);

        //keep track of the number of ports found
        int portsFound = 0;

        //Iterate over each port
        for (var port : result.getPorts()) {
            var scanHostPort = birdDogDataApi.insert(new ScanHostPort(scanJob, result.getHost(), BirddogTool.NMAP, ScanPortState.VALID, port));

            //increment the port count
            portsFound++;

            //Create the local port for this
            var ovPort = openVasClient.lookupOrCreatePort(scanHostPort);
            BirddogUtil.debug("PORT", "CREATED", "%s", ovPort);

            //create the target for this
            var ovTarget = openVasClient.lookupOrCreateTarget(ovPort, customer, scanHostPort);
            BirddogUtil.debug("TARGET", "CREATED", "%s", ovTarget);

            //create the scan detail
            var ovScanDetail = openVasClient.createScan(ovTarget, ovPort, OpenvasScanStatus.CREATED);
            BirddogUtil.debug("SCAN DETAIL", "CREATED", "%s", ovScanDetail);

            //update the database with the open vas target
            birdDogDataApi.updateScanDetail(scanHostPort.getId(), BirddogTool.OPENVAS, ovScanDetail);
            BirddogUtil.debug("SCAN DETAIL", "UPDATED", "%s", ovScanDetail);

            //WS
            this.webSocket.broadcast(new ScanWsMessage(new Date(), "localhost", "OpenVas", String.format("Target Created: %s", ovTarget.getId())));
        }

        //WS
        this.webSocket.broadcast(new ScanWsMessage(new Date(), "localhost", "DIG", String.format("%s", dug)));

        //return the number of ports that were found
        return portsFound;
    }

}
