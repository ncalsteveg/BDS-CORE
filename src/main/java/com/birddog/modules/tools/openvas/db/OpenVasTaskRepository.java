package com.birddog.modules.tools.openvas.db;

import com.birddog.modules.tools.openvas.model.OpenVasTask;
import com.birddog.modules.tools.openvas.model.OpenVasTaskStatus;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface OpenVasTaskRepository extends CrudRepository<OpenVasTask, String> {

    /***
     * Find OpenVas Tasks based on the status
     * @param status
     * @return
     */
    Iterable<OpenVasTask> findByStatus(OpenVasTaskStatus status);
}
