package com.birddog.modules.tools.dig.model;

/***
 * An entry for Dig Results
 */
public class DigEntry {

    private String name;
    private String ttl;
    private String digClass;
    private String digType;
    private String ipAddress;

    public DigEntry() {
    }

    /***
     *
     * @param name
     * @param ttl
     * @param digClass
     * @param digType
     * @param ipAddress
     */
    public DigEntry(String name, String ttl, String digClass, String digType, String ipAddress) {
        this.name = name;
        this.ttl = ttl;
        this.digClass = digClass;
        this.digType = digType;
        this.ipAddress = ipAddress;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTtl() {
        return ttl;
    }

    public void setTtl(String ttl) {
        this.ttl = ttl;
    }

    public String getDigClass() {
        return digClass;
    }

    public void setDigClass(String digClass) {
        this.digClass = digClass;
    }

    public String getDigType() {
        return digType;
    }

    public void setDigType(String digType) {
        this.digType = digType;
    }

    public String getIpAddress() {
        return ipAddress;
    }

    public void setIpAddress(String ipAddress) {
        this.ipAddress = ipAddress;
    }

    @Override
    public String toString() {
        return "DigEntry{" +
                "name='" + name + '\'' +
                ", ttl='" + ttl + '\'' +
                ", digClass='" + digClass + '\'' +
                ", digType='" + digType + '\'' +
                ", ipAddress='" + ipAddress + '\'' +
                '}';
    }
}
