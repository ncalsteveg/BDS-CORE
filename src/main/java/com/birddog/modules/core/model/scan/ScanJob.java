package com.birddog.modules.core.model.scan;

import com.birddog.modules.core.model.customer.Customer;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.*;

import java.util.Date;
import java.util.UUID;

@MappedEntity
public class ScanJob {

    @AutoPopulated
    @Id
    private UUID id;  //primary key

    private UUID customerId; //the customer who owns this scan job

    private ScanJobStatus jobStatus; //the current status of the scan job

    //The date the scan was started
    private Date scanStarted;

    //The date the scan was completed
    @Nullable
    private Date scanCompleted;

    @DateCreated
    private Date created; //date this record was created

    @DateUpdated
    private Date updated; // date this record was u

    public ScanJob() {
    }

    public ScanJob(Customer customer, ScanJobStatus jobStatus) {
        this.customerId = customer.getId();
        this.jobStatus = jobStatus;

        this.scanStarted = new Date();
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getCustomerId() {
        return customerId;
    }

    public void setCustomerId(UUID customerId) {
        this.customerId = customerId;
    }

    public ScanJobStatus getJobStatus() {
        return jobStatus;
    }

    public void setJobStatus(ScanJobStatus jobStatus) {
        this.jobStatus = jobStatus;
    }

    public Date getScanStarted() {
        return scanStarted;
    }

    public void setScanStarted(Date scanStarted) {
        this.scanStarted = scanStarted;
    }

    @Nullable
    public Date getScanCompleted() {
        return scanCompleted;
    }

    public void setScanCompleted(@Nullable Date scanCompleted) {
        this.scanCompleted = scanCompleted;
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
        return "ScanJob{" +
                "id=" + id +
                ", customerId=" + customerId +
                ", jobStatus=" + jobStatus +
                ", scanStarted=" + scanStarted +
                ", scanCompleted=" + scanCompleted +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}
