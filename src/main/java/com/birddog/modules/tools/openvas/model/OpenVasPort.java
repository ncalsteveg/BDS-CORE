package com.birddog.modules.tools.openvas.model;

import com.birddog.modules.tools.openvas.clients.model.xml.CreatePortListResponse;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity
public class OpenVasPort {
    @Id
    private String id;

    private String ovPortId;

    private String protocol;

    private int port;

    public OpenVasPort() {
    }

    public OpenVasPort(String id, String protocol, int port, CreatePortListResponse response) {
        this.id = id;
        this.ovPortId = response.getId();
        this.protocol = protocol;
        this.port = port;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOvPortId() {
        return ovPortId;
    }

    public void setOvPortId(String ovPortId) {
        this.ovPortId = ovPortId;
    }

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }

    @Override
    public String toString() {
        return "OpenVasPort{" +
                "id='" + id + '\'' +
                ", ovPortId='" + ovPortId + '\'' +
                ", protocol='" + protocol + '\'' +
                ", port=" + port +
                '}';
    }
}
