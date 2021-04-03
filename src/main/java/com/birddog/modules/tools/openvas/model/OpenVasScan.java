package com.birddog.modules.tools.openvas.model;

import com.birddog.modules.core.model.scan.ScanDetail;
import com.birddog.modules.tools.openvas.clients.model.xml.ScanReport;

import java.util.Date;
import java.util.UUID;

public class OpenVasScan extends ScanDetail {

    private OpenVasTarget target;

    private OpenVasPort port;

    private Date created;

    private Date updated;

    private OpenvasScanStatus status;

    private ScanReport report;

    public OpenVasScan() {

    }

    /***
     *
     * @param target
     * @param port
     * @param status
     */
    public OpenVasScan(OpenVasTarget target, OpenVasPort port, OpenvasScanStatus status) {
        this.target = target;
        this.port = port;
        this.status = status;

        var now = new Date();

        this.created = now;
        this.updated = now;

        this.report = new ScanReport(UUID.randomUUID().toString());
    }

    public OpenVasTarget getTarget() {
        return target;
    }

    public void setTarget(OpenVasTarget target) {
        this.target = target;
    }

    public OpenVasPort getPort() {
        return port;
    }

    public void setPort(OpenVasPort port) {
        this.port = port;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public OpenvasScanStatus getStatus() {
        return status;
    }

    public void setStatus(OpenvasScanStatus status) {
        this.status = status;
    }

    public ScanReport getReport() {
        return report;
    }

    public void setReport(ScanReport report) {
        this.report = report;
    }

    @Override
    public String toString() {
        return "OpenVasScan{" +
                "target=" + target +
                ", port=" + port +
                ", created=" + created +
                ", updated=" + updated +
                ", status=" + status +
                ", report=" + report +
                '}';
    }
}
