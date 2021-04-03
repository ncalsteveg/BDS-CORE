package com.birddog.modules.core.db;

import com.birddog.modules.core.model.scan.ScanJob;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface ScanJobRepository extends CrudRepository<ScanJob, UUID> {

    /***
     * Update the scan completed date
     * @param id
     * @param scanCompleted
     */
    void update(@Id UUID id, Date scanCompleted);

    /***
     * Find the list of Scan Jobs by Customer
     * @param customerId
     * @return
     */
    List<ScanJob> findByCustomerId(UUID customerId);

}
