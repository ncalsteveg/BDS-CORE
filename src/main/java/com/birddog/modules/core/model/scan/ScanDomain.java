package com.birddog.modules.core.model.scan;

import com.birddog.modules.core.model.BirddogTool;
import com.birddog.modules.core.model.customer.CustomerDomainStatus;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.*;

import java.util.Date;
import java.util.UUID;

@MappedEntity
public class ScanDomain {

    @AutoPopulated
    @Id
    private UUID id;  //primary key

    private UUID scanJobId; // the customer who owns this domain

    @Nullable
    private BirddogTool tool; //the tool this data was obtained from

    @MappedProperty()
    private String dnsName; //the dns entry name for the domain

    private CustomerDomainStatus status; //status of the domain

    private String discoverySource; //the source the domain was acquired from

    private int portsFounds; //the number of active ports found for this domain

    @DateCreated
    private Date created; //date this record was created

    @DateUpdated
    private Date updated; // date this record was updated

    public ScanDomain() {
    }

    /***
     *
     * @param scanJob
     * @param dnsName
     * @param status
     * @param discoverySource
     */
    public ScanDomain(ScanJob scanJob, BirddogTool tool, String dnsName, CustomerDomainStatus status, String discoverySource) {
        this.scanJobId = scanJob.getId();
        this.dnsName = dnsName;
        this.status = status;
        this.discoverySource = discoverySource;
        this.portsFounds = -1;
        this.tool = tool;
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

    public BirddogTool getTool() {
        return tool;
    }

    public void setTool(BirddogTool tool) {
        this.tool = tool;
    }

    public String getDnsName() {
        return dnsName;
    }

    public void setDnsName(String dnsName) {
        this.dnsName = dnsName;
    }

    public CustomerDomainStatus getStatus() {
        return status;
    }

    public void setStatus(CustomerDomainStatus status) {
        this.status = status;
    }

    public String getDiscoverySource() {
        return discoverySource;
    }

    public void setDiscoverySource(String discoverySource) {
        this.discoverySource = discoverySource;
    }

    public int getPortsFounds() {
        return portsFounds;
    }

    public void setPortsFounds(int portsFounds) {
        this.portsFounds = portsFounds;
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

    @Override
    public String toString() {
        return "ScanDomain{" +
                "id=" + id +
                ", scanJobId=" + scanJobId +
                ", tool=" + tool +
                ", dnsName='" + dnsName + '\'' +
                ", status=" + status +
                ", discoverySource='" + discoverySource + '\'' +
                ", portsFounds=" + portsFounds +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}
