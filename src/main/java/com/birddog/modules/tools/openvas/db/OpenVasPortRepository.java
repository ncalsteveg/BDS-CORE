package com.birddog.modules.tools.openvas.db;

import com.birddog.modules.tools.openvas.model.OpenVasPort;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface OpenVasPortRepository extends CrudRepository<OpenVasPort, String> {
}
