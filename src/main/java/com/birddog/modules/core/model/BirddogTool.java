package com.birddog.modules.core.model;

/**
 * Enum to track what data in the system comes from what tool.  This is going to be used to we can keep track where the
 * data came from, might not need it, but its simple and i bet it will be useful
 */
public enum BirddogTool {
    SUBFINDER, DIG, NMAP, OPENVAS, SUPPLIED
}
