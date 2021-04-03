package com.birddog.modules.core.model.scan;

import com.birddog.modules.core.model.BirddogTool;

public class ScanDetailError {

    private BirddogTool tool;
    private String exception;

    public BirddogTool getTool() {
        return tool;
    }

    public void setTool(BirddogTool tool) {
        this.tool = tool;
    }

    public String getException() {
        return exception;
    }

    public void setException(String exception) {
        this.exception = exception;
    }
}
