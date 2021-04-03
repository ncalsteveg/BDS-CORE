package com.birddog.modules.tools.subfinder.model;

public class SubfinderSubDomain {

    private String host;
    private String source;

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    @Override
    public String toString() {
        return "SubfinderSubDomain{" +
                "host='" + host + '\'' +
                ", source='" + source + '\'' +
                '}';
    }
}
