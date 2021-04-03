package com.birddog.modules.tools.openvas.clients.model.xml;

public class ScanReport {

    private String id;

    public ScanReport() {
    }

    public ScanReport(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
