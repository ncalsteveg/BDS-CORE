package com.birddog.modules.tools.openvas.clients.model.xml;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JacksonXmlRootElement(localName = "create_port_list_response")
public class CreatePortListResponse {

    @JacksonXmlProperty(isAttribute = true, localName = "id")
    private String id;

    @JacksonXmlProperty(isAttribute = true, localName = "status")
    private int status;

    @JacksonXmlProperty(isAttribute = true, localName = "status_text")
    private String status_text;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getStatus_text() {
        return status_text;
    }

    public void setStatus_text(String status_text) {
        this.status_text = status_text;
    }


    @Override
    public String toString() {
        return "CreatePortListResponse{" +
                "id='" + id + '\'' +
                ", status=" + status +
                ", status_text='" + status_text + '\'' +
                '}';
    }
}

