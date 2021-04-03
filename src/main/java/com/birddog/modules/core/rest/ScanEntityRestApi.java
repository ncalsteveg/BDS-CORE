package com.birddog.modules.core.rest;

import com.birddog.modules.core.api.BirdDogDataApi;
import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.core.model.scan.ScanDomain;
import com.birddog.modules.core.model.scan.ScanHost;
import com.birddog.modules.core.model.scan.ScanHostPort;
import com.birddog.modules.core.model.scan.ScanJob;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.PathVariable;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;

import java.util.List;
import java.util.UUID;

@Secured(SecurityRule.IS_ANONYMOUS)
@Controller("api/entities")
public class ScanEntityRestApi {

    private final BirdDogDataApi birdDogDataApi; //core data layer api for the marvelous bird dog tool suite

    /***
     *
     * @param birdDogDataApi
     */
    public ScanEntityRestApi(BirdDogDataApi birdDogDataApi) {
        this.birdDogDataApi = birdDogDataApi;
    }


    @Get("/Customer")
    public Iterable<Customer> findCustomers() {
        return birdDogDataApi.findCustomers();
    }

    @Get("/ScanJob/{customerId}")
    public List<ScanJob> findScanJobs(@PathVariable UUID customerId) {
        return birdDogDataApi.findByCustomerId(customerId);
    }

    @Get("/ScanDomain/{scanJobId}")
    public List<ScanDomain> findScanDomains(@PathVariable UUID scanJobId) {
        return birdDogDataApi.findByScanJobId(scanJobId);
    }

    @Get("/ScanHost/{scanDomainId}")
    public List<ScanHost> findScanHosts(@PathVariable UUID scanDomainId) {
        return birdDogDataApi.findByScanDomainId(scanDomainId);
    }

    @Get("/ScanHostPort/{scanHostId}")
    public List<ScanHostPort> findScanHostPorts(@PathVariable UUID scanHostId) {
        return birdDogDataApi.findByScanHostId(scanHostId);
    }
}
