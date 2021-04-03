package com.birddog.modules.tools.nmap.model;

/**
 * The raw XML output from NMAP this can be helpful to store for future reference and for debugging errors
 */
public class NmapXmlOutput {

    private String xml;

    public NmapXmlOutput() {
    }

    public NmapXmlOutput(String xml) {
        this.xml = xml;
    }

    public String getXml() {
        return xml;
    }

    public void setXml(String xml) {
        this.xml = xml;
    }

    @Override
    public String toString() {
        return "NmapXmlOutput{" +
                "xml='" + xml + '\'' +
                '}';
    }
}
