package com.birddog.modules.tools.openvas.model;

import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

@MappedEntity
public class OpenVasTarget {

    @Id
    private String id;

    private String ovTargetId;

    private String ovPortId;

    private String companyName;

    private String host;

    private String protocol;

    private int port;

    public OpenVasTarget() {
    }


    public OpenVasTarget(String id, String ovTargetId, String ovPortId, String companyName, String host, String protocol, int port) {
        this.id = id;
        this.ovTargetId = ovTargetId;
        this.ovPortId = ovPortId;
        this.companyName = companyName;
        this.host = host;
        this.protocol = protocol;
        this.port = port;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOvTargetId() {
        return ovTargetId;
    }

    public void setOvTargetId(String ovTargetId) {
        this.ovTargetId = ovTargetId;
    }

    public String getOvPortId() {
        return ovPortId;
    }

    public void setOvPortId(String ovPortId) {
        this.ovPortId = ovPortId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
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
        return "OpenVasTarget{" +
                "id='" + id + '\'' +
                ", ovTargetId='" + ovTargetId + '\'' +
                ", ovPortId='" + ovPortId + '\'' +
                ", companyName='" + companyName + '\'' +
                ", host='" + host + '\'' +
                ", protocol='" + protocol + '\'' +
                ", port=" + port +
                '}';
    }
}
