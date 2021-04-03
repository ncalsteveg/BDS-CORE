package com.birddog.modules.core.model.scan;

import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.CLASS, property = "className")
public abstract class ScanDetail {
}
