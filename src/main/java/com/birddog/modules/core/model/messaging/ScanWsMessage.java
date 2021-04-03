package com.birddog.modules.core.model.messaging;

import java.util.Date;

public class ScanWsMessage {

    private Date statusDate;
    private String server;
    private String scanType;
    private String scanMessage;

    public ScanWsMessage() {
    }

    public ScanWsMessage(Date statusDate, String server, String scanType, String scanMessage) {
        this.statusDate = statusDate;
        this.server = server;
        this.scanType = scanType;
        this.scanMessage = scanMessage;
    }

    public Date getStatusDate() {
        return statusDate;
    }

    public void setStatusDate(Date statusDate) {
        this.statusDate = statusDate;
    }

    public String getServer() {
        return server;
    }

    public void setServer(String server) {
        this.server = server;
    }

    public String getScanType() {
        return scanType;
    }

    public void setScanType(String scanType) {
        this.scanType = scanType;
    }

    public String getScanMessage() {
        return scanMessage;
    }

    public void setScanMessage(String scanMessage) {
        this.scanMessage = scanMessage;
    }

    @Override
    public String toString() {
        return "ScanWsMessage{" +
                "statusDate=" + statusDate +
                ", server='" + server + '\'' +
                ", scanType='" + scanType + '\'' +
                ", scanMessage='" + scanMessage + '\'' +
                '}';
    }
}
