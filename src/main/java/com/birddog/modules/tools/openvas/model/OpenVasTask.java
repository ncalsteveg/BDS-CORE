package com.birddog.modules.tools.openvas.model;

import com.birddog.modules.tools.openvas.clients.model.xml.CreateTaskResponse;
import io.micronaut.data.annotation.DateCreated;
import io.micronaut.data.annotation.DateUpdated;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;

import java.util.Date;

@MappedEntity
public class OpenVasTask {

    @Id
    private String id;

    private String ovTaskId;

    private OpenVasTaskStatus status;

    @DateCreated
    private Date created;

    @DateUpdated
    private Date updated;

    public OpenVasTask() {
    }

    public OpenVasTask(String id, CreateTaskResponse response) {
        this.id = id;
        this.ovTaskId = response.getId();
        this.status = OpenVasTaskStatus.CREATED;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOvTaskId() {
        return ovTaskId;
    }

    public void setOvTaskId(String ovTaskId) {
        this.ovTaskId = ovTaskId;
    }

    public OpenVasTaskStatus getStatus() {
        return status;
    }

    public void setStatus(OpenVasTaskStatus status) {
        this.status = status;
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
        return "OpenVasTask{" +
                "id='" + id + '\'' +
                ", ovTaskId='" + ovTaskId + '\'' +
                ", status=" + status +
                ", created=" + created +
                ", updated=" + updated +
                '}';
    }
}
