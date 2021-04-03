package com.birddog.modules.core.db;

import com.birddog.modules.core.model.scan.ScanHostPort;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface ScanHostPortRepository extends CrudRepository<ScanHostPort, Long> {

    List<ScanHostPort> findByScanJobId(UUID scanJobId);
    List<ScanHostPort> findByScanHostId(UUID scanHostId);
}

