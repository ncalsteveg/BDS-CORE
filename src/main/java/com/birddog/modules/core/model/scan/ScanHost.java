package com.birddog.modules.core.model.scan;

import com.birddog.modules.core.model.BirddogTool;
import com.birddog.modules.tools.nmap.model.NmapXmlOutput;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.*;
import io.micronaut.data.model.DataType;

import java.util.Date;
import java.util.UUID;

@MappedEntity
public class ScanHost {


    @AutoPopulated
    @Id
    private UUID id;  //primary key

    private UUID scanJobId;

    private UUID scanDomainId;

    @Nullable
    private BirddogTool tool; //the tool this data was obtained from

    private ScanHostStatus status;

    private String ipAddress;

    private int portsFound; // the number of ports found open by name, need to work this out. This helps searching and filtering

    @DateCreated
    private Date created;

    @DateUpdated
    private Date updated;

    @Nullable
    @TypeDef(type = DataType.JSON)
    private NmapXmlOutput xmlOutput;


    public ScanHost() {
    }

    /***
     *
     * @param scanJob
     * @param scanDomain
     * @param status
     * @param ipAddress
     */
    public ScanHost(ScanJob scanJob, ScanDomain scanDomain, BirddogTool tool, ScanHostStatus status, String ipAddress) {
        this.scanJobId = scanJob.getId();
        this.scanDomainId = scanDomain.getId();
        this.tool = tool;
        this.status = status;
        this.ipAddress = ipAddress;
    }

    /***
     *
     * @param scanJob
     * @param scanDomain
     * @param status
     * @param ipAddress
     * @param portsFound
     */
    public ScanHost(ScanJob scanJob, ScanDomain scanDomain, BirddogTool tool, ScanHostStatus status, String ipAddress, int portsFound) {
        this(scanJob, scanDomain, tool, status, ipAddress);
        this.portsFound = portsFound;
    }

    /***
     *
     * @param scanJob
     * @param scanDomain
     * @param status
     * @param ipAddress
     * @param portsFound
     * @param xmlOutput
     */
    public ScanHost(ScanJob scanJob, ScanDomain scanDomain, BirddogTool tool, ScanHostStatus status, String ipAddress, int portsFound, NmapXmlOutput xmlOutput) {
        this(scanJob, scanDomain, tool, status, ipAddress, portsFound);
        this.xmlOutput = xmlOutput;

    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getScanJobId() {
        return scanJobId;
    }

    public void setScanJobId(UUID scanJobId) {
        this.scanJobId = scanJobId;
    }

    public UUID getScanDomainId() {
        return scanDomainId;
    }

    public void setScanDomainId(UUID scanDomainId) {
        this.scanDomainId = scanDomainId;
    }

    public BirddogTool getTool() {
        return tool;
    }

    public void setTool(BirddogTool tool) {
        this.tool = tool;
    }

    public ScanHostStatus getStatus() {
        return status;
    }

    public void setStatus(ScanHostStatus status) {
        this.status = status;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public int getPortsFound() {
        return portsFound;
    }

    public void setPortsFound(int portsFound) {
        this.portsFound = portsFound;
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

    @Nullable
    public NmapXmlOutput getXmlOutput() {
        return xmlOutput;
    }

    public void setXmlOutput(@Nullable NmapXmlOutput xmlOutput) {
        this.xmlOutput = xmlOutput;
    }
}
