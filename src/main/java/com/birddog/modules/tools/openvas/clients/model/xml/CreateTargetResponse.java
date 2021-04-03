package com.birddog.modules.tools.openvas.clients.model.xml;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

public class CreateTargetResponse {

    @JacksonXmlProperty(isAttribute = true, localName = "id")
    private String id;

    @JacksonXmlProperty(isAttribute = true, localName = "status")
    private String status;

    @JacksonXmlProperty(isAttribute = true, localName = "status_text")
    private String statusTest;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusTest() {
        return statusTest;
    }

    public void setStatusTest(String statusTest) {
        this.statusTest = statusTest;
    }

    @Override
    public String toString() {
        return "CreateTargetResponse{" +
                "id='" + id + '\'' +
                ", status='" + status + '\'' +
                ", statusTest='" + statusTest + '\'' +
                '}';
    }
}
