package com.birddog.modules.tools.nmap;

import com.birddog.modules.core.model.BirddogTool;
import com.birddog.modules.core.model.messaging.ScanWsMessage;
import com.birddog.modules.core.model.scan.*;
import com.birddog.modules.core.rest.ScanWebSocket;
import com.birddog.modules.tools.dig.model.DigEntry;
import com.birddog.modules.tools.nmap.model.NmapCommand;
import com.google.common.base.Strings;
import org.birddog.Port;

import javax.inject.Singleton;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Singleton
public class NmapCLient {

    //used to broadcast progress so clients can see
    private final ScanWebSocket webSocket;

    public NmapCLient(ScanWebSocket webSocket) {
        this.webSocket = webSocket;
    }


    /***
     *
     * @throws IOException
     */
    public ScanHostAndPorts executeNmap(ScanJob scanJob, ScanDomain scanDomain, DigEntry digEntry) {

        try {
            if (Strings.isNullOrEmpty(digEntry.getIpAddress())) {

                //TODO: Better error handling
                return new ScanHostAndPorts(
                        new ScanHost(scanJob, scanDomain, BirddogTool.NMAP, ScanHostStatus.ERROR, digEntry.getIpAddress()), List.of());
            } else {
                //create the command to run namp
                NmapCommand command = new NmapCommand(digEntry.getIpAddress());

                //execute the command
                command.execute();

                var optional = command.getNmapRun();

                if (optional.isPresent()) {
                    var run = optional.get();

                    var stats = run.getRunstats();

                    if (stats != null) {
                        //Make sure there is a host
                        if (stats.getHosts() != null) {
                            //Make sure the ports are up
                            if (stats.getHosts().up > 0) {

                                var ports = new ArrayList<Port>();
                                //Make sure there is a host here
                                if (run.getHost() != null && run.getHost().getPorts() != null) {

                                    //loop through the ports and add them
                                    for (var port : run.getHost().getPorts().port) {
                                        ports.add(port);

                                        //info
                                        this.webSocket.broadcast(new ScanWsMessage(new Date(), "localhost", "NMAP", String.format("%s", port)));
                                    }

                                    //TODO: we need to insert the domain first, but if we have the port info first we can avoid some unecessary updates, think about this more
                                    if (command.getXmlOutput().isPresent()) {
                                        return new ScanHostAndPorts(
                                                new ScanHost(scanJob, scanDomain, BirddogTool.NMAP, ScanHostStatus.HAS_RESULTS, digEntry.getIpAddress(), ports.size(), command.getXmlOutput().get()), ports);
                                    } else {
                                        return new ScanHostAndPorts(
                                                new ScanHost(scanJob, scanDomain, BirddogTool.NMAP, ScanHostStatus.HAS_RESULTS, digEntry.getIpAddress(), ports.size()), ports);
                                    }
                                }
                            } else {
                                //No hosts are up, so yeah nothing to do here, probably need to be better about how we do this
                                return new ScanHostAndPorts(
                                        new ScanHost(scanJob, scanDomain, BirddogTool.NMAP, ScanHostStatus.HAS_RESULTS, digEntry.getIpAddress()), List.of());
                            }
                        } else {
                            //TODO: Update domain status
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        //Return a new host indicating we found nothing
        return new ScanHostAndPorts(
                new ScanHost(scanJob, scanDomain, BirddogTool.NMAP, ScanHostStatus.HAS_RESULTS, digEntry.getIpAddress()), List.of());
    }
}
