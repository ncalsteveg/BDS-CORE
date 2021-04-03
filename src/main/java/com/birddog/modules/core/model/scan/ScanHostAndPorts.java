package com.birddog.modules.core.model.scan;

import org.birddog.Port;

import java.util.List;

public class ScanHostAndPorts {

    private final ScanHost host;

    private final List<Port> ports;

    public ScanHostAndPorts(ScanHost host, List<Port> ports) {
        this.host = host;
        this.ports = ports;
    }

    public ScanHost getHost() {
        return host;
    }

    public List<Port> getPorts() {
        return ports;
    }
}
