package com.birddog.modules.core.db;

import com.birddog.modules.core.model.customer.Customer;
import io.micronaut.data.jdbc.annotation.JdbcRepository;
import io.micronaut.data.model.query.builder.sql.Dialect;
import io.micronaut.data.repository.CrudRepository;

import java.util.UUID;

@JdbcRepository(dialect = Dialect.MYSQL)
public interface CustomerRepository extends CrudRepository<Customer, UUID> {
}
