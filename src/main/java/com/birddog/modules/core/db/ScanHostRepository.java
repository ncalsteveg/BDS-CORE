package com.birddog.modules.core.db;

import com.birddog.modules.core.model.scan.ScanHost;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface ScanHostRepository extends CrudRepository<ScanHost, Long> {

    /***
     * Find the Scan Hosts by the scan domain id
     * @param scanDomainId
     * @return
     */
    List<ScanHost> findByScanDomainId(UUID scanDomainId);
}
