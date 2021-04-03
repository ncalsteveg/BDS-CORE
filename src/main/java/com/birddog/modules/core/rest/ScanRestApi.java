package com.birddog.modules.core.rest;

import com.birddog.modules.core.api.BirdDogDataApi;
import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.core.model.scan.ScanHostPort;
import com.birddog.modules.core.service.BirdDogScanService;
import io.micronaut.core.io.ResourceResolver;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.http.server.types.files.StreamedFile;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Secured(SecurityRule.IS_ANONYMOUS)
@Controller
public class ScanRestApi {

    private final BirdDogScanService scanService;
    private final BirdDogDataApi dataApi;
    private final ResourceResolver resourceResolver;

    public ScanRestApi(BirdDogScanService scanService, BirdDogDataApi dataApi, ResourceResolver resourceResolver) {
        this.scanService = scanService;
        this.dataApi = dataApi;
        this.resourceResolver = resourceResolver;
    }

    @Secured(SecurityRule.IS_ANONYMOUS)
    @Get(produces = MediaType.TEXT_HTML)
    public Optional<StreamedFile> spa() {
        return resourceResolver.getResource("classpath:spa/index.html").map(StreamedFile::new);
    }

    @Secured(SecurityRule.IS_ANONYMOUS)
    @Post(value = "/api/scan/", consumes = MediaType.TEXT_PLAIN)
    public void scan(@Body String host) throws IOException {

        var customer = new Customer();
        customer.setName(host);
        dataApi.insert(customer);

        scanService.scan(customer, host);
    }

    @Secured(SecurityRule.IS_ANONYMOUS)
    @Get(value = "/api/scan/nmap/{scanJobId}")
    public List<ScanHostPort> findScanHostPortsByScanJob(@PathVariable UUID scanJobId) {
        return dataApi.findByScanHostPortByJobId(scanJobId);
    }
}
