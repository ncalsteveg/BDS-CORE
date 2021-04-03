package com.birddog.modules.tools.nmap.model;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.birddog.Nmaprun;
import org.nmap4j.Nmap4j;
import org.nmap4j.core.nmap.NMapExecutionException;
import org.nmap4j.core.nmap.NMapInitializationException;

import javax.xml.stream.XMLStreamException;
import java.util.Optional;

/**
 * Command do execute namp against specific ip addresses
 */
public class NmapCommand {

    //the host we are scanning
    private final String host;

    //the run
    private Nmaprun run = null;

    //the results
    private NmapXmlOutput xmlOutput = null;

    public NmapCommand(String host) {
        this.host = host;
    }

    /***
     *
     */
    public void execute() {

        try {
            String path = "/usr";

            Nmap4j nmap4j = new Nmap4j(path);
            nmap4j.includeHosts(host);
            nmap4j.addFlags("-sV");
            nmap4j.execute();
            if (!nmap4j.hasError()) {
                try {
                    this.run = nmap4j.parse();
                    this.xmlOutput = new NmapXmlOutput(nmap4j.getOutput());
                } catch (XMLStreamException e) {
                    e.printStackTrace();
                } catch (JsonProcessingException e) {
                    e.printStackTrace();
                }
            } else {
                throw new RuntimeException(nmap4j.getExecutionResults().getErrors());
            }
        } catch (NMapInitializationException e) {
            e.printStackTrace();
        } catch (NMapExecutionException e) {
            e.printStackTrace();
        }

    }

    /***
     *
     * @return
     */
    public Optional<NmapXmlOutput> getXmlOutput() {
        if (xmlOutput != null) {
            return Optional.of(xmlOutput);
        }

        return Optional.empty();
    }

    /***
     *
     * @return
     */
    public Optional<Nmaprun> getNmapRun() {

        if (run != null) {
            return Optional.of(run);
        }

        return Optional.empty();
    }
}
