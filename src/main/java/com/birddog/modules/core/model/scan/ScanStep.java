package com.birddog.modules.core.model.scan;

import io.micronaut.data.annotation.AutoPopulated;
import io.micronaut.data.annotation.Id;

import java.util.Date;
import java.util.UUID;

public class ScanStep {

    @AutoPopulated
    @Id
    private UUID id;  //primary key

    private UUID scanJobId;

    private Date statusDate;

    private String message;
}
