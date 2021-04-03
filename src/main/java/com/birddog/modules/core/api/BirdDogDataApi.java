package com.birddog.modules.core.api;

import com.birddog.modules.core.db.*;
import com.birddog.modules.core.model.BirddogTool;
import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.core.model.scan.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.jdbc.runtime.JdbcOperations;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

/***
 * Basic data methods used across the bird dog tool suite
 */
@Transactional
public class BirdDogDataApi {

    private final JdbcOperations jdbc;

    private final CustomerRepository customerRepo;
    private final ScanJobRepository scanJobRepo;
    private final ScanDomainRepository scanDomainRepo;
    private final ScanHostRepository scanHostRepo;
    private final ScanHostPortRepository scanHostPortRepo;

    private final ObjectMapper mapper = new ObjectMapper();

    /***
     * The core API to interact with the data storage
     * @param jdbc
     * @param customerRepo
     * @param scanJobRepo
     * @param scanDomainRepo
     * @param scanHostRepo
     * @param scanHostPortRepo
     */
    public BirdDogDataApi(JdbcOperations jdbc, CustomerRepository customerRepo, ScanJobRepository scanJobRepo, ScanDomainRepository scanDomainRepo, ScanHostRepository scanHostRepo, ScanHostPortRepository scanHostPortRepo) {
        this.jdbc = jdbc;
        this.customerRepo = customerRepo;
        this.scanJobRepo = scanJobRepo;
        this.scanDomainRepo = scanDomainRepo;
        this.scanHostRepo = scanHostRepo;
        this.scanHostPortRepo = scanHostPortRepo;
    }

    /***
     *
     * @param scanJob
     */
    public void insert(ScanJob scanJob) {
        scanJobRepo.save(scanJob);
    }


    /***
     * Update a scan job to mark it complete
     * @param id
     * @param scanCompleted
     */
    public void completeScanJob(UUID id, Date scanCompleted) {
        scanJobRepo.update(id, scanCompleted);
    }


    /***
     *
     * @param customer
     */
    public void insert(Customer customer) {
        customerRepo.save(customer);
    }


    /***
     *
     * @param id
     * @return
     */
    public Optional<Customer> findCustomerById(UUID id) {
        return customerRepo.findById(id);
    }


    /***
     *
     * @param scanDomain
     */
    public void insert(ScanDomain scanDomain) {
        scanDomainRepo.save(scanDomain);
    }

    /***
     *
     * @param scanHost
     */
    public ScanHost insert(ScanHost scanHost) {
        return scanHostRepo.save(scanHost);
    }


    /***
     *
     * @param scanHostPort
     */
    public ScanHostPort insert(ScanHostPort scanHostPort) {
        return scanHostPortRepo.save(scanHostPort);
    }


    /***
     * Find all customers
     * @return
     */
    public Iterable<Customer> findCustomers() {
        return customerRepo.findAll();
    }

    /***
     *
     * @param customerId
     * @return
     */
    public List<ScanJob> findByCustomerId(UUID customerId) {
        return scanJobRepo.findByCustomerId(customerId);
    }

    /***
     * Find a list of Scan Domains by the Scan Job Id
     * @param scanJobId
     * @return
     */
    public List<ScanDomain> findByScanJobId(UUID scanJobId) {
        return scanDomainRepo.findByScanJobId(scanJobId);
    }

    /***
     * Find the Scan Hosts by the scan domain id
     * @param scanDomainId
     * @return
     */
    public List<ScanHost> findByScanDomainId(UUID scanDomainId) {
        return scanHostRepo.findByScanDomainId(scanDomainId);
    }

    /***
     *
     * @param scanHostId
     * @return
     */
    public List<ScanHostPort> findByScanHostId(UUID scanHostId) {
        return scanHostPortRepo.findByScanHostId(scanHostId);
    }

    /***
     *
     * @param scanJobId
     * @return
     */
    public List<ScanHostPort> findByScanHostPortByJobId(UUID scanJobId) {
        return scanHostPortRepo.findByScanJobId(scanJobId);
    }

    /**
     * Update the number of ports found after a scan run
     *
     * @param id
     * @param portsFounds
     */
    public void updateScanDomain(@Id UUID id, int portsFounds) {
        scanDomainRepo.update(id, portsFounds);
    }


    /***
     *
     * @param id
     * @param tool
     * @param scanDetail
     */
    @Transactional
    public void updateScanDetail(@Id UUID id, BirddogTool tool, ScanDetail scanDetail) {

        var sql = """
                UPDATE scan_host_port set tool = ?, detail = ? WHERE id = ?
                """;

        jdbc.prepareStatement(sql, statement -> {

            try {

                statement.setString(1, tool.name());

                var clob = jdbc.getConnection().createClob();
                clob.setString(1, mapper.writeValueAsString(scanDetail));
                statement.setClob(2, clob);

                statement.setString(3, id.toString());

                return statement.executeUpdate();
            } catch (JsonProcessingException e) {
                e.printStackTrace();

                return -1;
            }
        });

    }
}



