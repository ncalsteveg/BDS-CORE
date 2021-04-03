package com.birddog.modules.core.model.scan;

import com.birddog.modules.core.model.BirddogTool;
import io.micronaut.core.annotation.Nullable;
import io.micronaut.data.annotation.AutoPopulated;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.annotation.MappedEntity;
import io.micronaut.data.annotation.TypeDef;
import io.micronaut.data.model.DataType;
import org.birddog.Port;

import javax.validation.constraints.Null;
import java.util.UUID;

/***
 * Store the port information for a specific host
 */
@MappedEntity
public class ScanHostPort {

    @AutoPopulated
    @Id
    private UUID id;  //primary key

    private UUID scanJobId;

    private UUID scanHostId; //the unique id of the scan host

    @Nullable
    private BirddogTool tool; //the tool this data was obtained from

    private String ipAddress;

    private int portNumber;

    private String protocol;

    private ScanPortState currentState;

    @TypeDef(type = DataType.JSON)
    private Port port;

    @Nullable
    @TypeDef(type = DataType.JSON)
    private ScanDetail detail;

    /***
     *
     */
    public ScanHostPort() {
    }

    public ScanHostPort(ScanJob scanJob, ScanHost scanHost, BirddogTool tool, ScanPortState currentState, Port port) {

        this.scanJobId = scanJob.getId();
        this.scanHostId = scanHost.getId();
        this.currentState = currentState;
        this.ipAddress =scanHost.getIpAddress();
        this.port = port;
        this.portNumber = port.getPortid();
        this.protocol = port.getProtocol();
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

    public UUID getScanHostId() {
        return scanHostId;
    }

    public void setScanHostId(UUID scanHostId) {
        this.scanHostId = scanHostId;
    }

    public BirddogTool getTool() {
        return tool;
    }

    public void setTool(BirddogTool tool) {
        this.tool = tool;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    public int getPortNumber() {
        return portNumber;
    }

    public void setPortNumber(int portNumber) {
        this.portNumber = portNumber;
    }

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public ScanPortState getCurrentState() {
        return currentState;
    }

    public void setCurrentState(ScanPortState currentState) {
        this.currentState = currentState;
    }

    public Port getPort() {
        return port;
    }

    public void setPort(Port port) {
        this.port = port;
    }

    public ScanDetail getDetail() {
        return detail;
    }

    public void setDetail(ScanDetail detail) {
        this.detail = detail;
    }

    @Override
    public String toString() {
        return "ScanHostPort{" +
                "id=" + id +
                ", scanJobId=" + scanJobId +
                ", scanHostId=" + scanHostId +
                ", tool=" + tool +
                ", ipAddress='" + ipAddress + '\'' +
                ", portNumber=" + portNumber +
                ", protocol='" + protocol + '\'' +
                ", currentState=" + currentState +
                ", port=" + port +
                ", detail=" + detail +
                '}';
    }
}
