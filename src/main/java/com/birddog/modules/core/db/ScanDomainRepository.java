package com.birddog.modules.core.db;

import com.birddog.modules.core.model.scan.ScanDomain;
import io.micronaut.data.annotation.Id;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface ScanDomainRepository extends CrudRepository<ScanDomain, Long> {

    /***
     * Find a list of Scan Domains by the Scan Job Id
     * @param scanJobId
     * @return
     */
    List<ScanDomain> findByScanJobId(UUID scanJobId);

    /**
     * Update the number of ports found after a scan run
     * @param id
     * @param portsFounds
     */
    void update(@Id UUID id, int portsFounds);
}
