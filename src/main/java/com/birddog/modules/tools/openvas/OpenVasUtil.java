package com.birddog.modules.tools.openvas;

import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.tools.openvas.clients.model.xml.CreatePortListResponse;
import com.birddog.modules.tools.openvas.clients.model.xml.CreateTargetResponse;
import com.birddog.modules.tools.openvas.clients.model.xml.CreateTaskResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import io.micronaut.context.annotation.Value;

import javax.inject.Singleton;
import java.util.Locale;

/**
 * Utility methods
 */
@Singleton
public class OpenVasUtil {

    @Value("${birddog.tools.openvas.prefix}")
    String prefix;

    @Value("${birddog.tools.openvas.socket}")
    String socketPath; //socket for cli

    @Value("${birddog.tools.openvas.username}")
    String username; //socket for cli

    @Value("${birddog.tools.openvas.password}")
    String password; //socket for cli

    private final XmlMapper xmlMapper = new XmlMapper();


    /***
     *
     * @param xml
     * @return
     */
    public String generateCommand(String xml) {
        //create the cmd text to run the cli cmd
        return String.format("gvm-cli --gmp-username %s --gmp-password %s socket --socketpath %s --xml \"%s\"",
                username,
                password,
                socketPath,
                xml);
    }

    /***
     *
     * @param protocol
     * @param port
     * @return
     */
    public String generatePortId(String protocol, int port) {
        return String.format("%s-%s-%d",
                prefix,
                protocol.toUpperCase(Locale.ROOT),
                port);
    }


    /***
     *
     * @param customer
     * @param host
     * @param protocol
     * @param port
     * @return
     */
    public String generateTargetId(Customer customer, String host, String protocol, int port) {
        return String.format("%s-%s-%s-%s-%d",
                prefix,
                customer.getName().toUpperCase(Locale.ROOT),
                host.toUpperCase(Locale.ROOT),
                protocol.toUpperCase(Locale.ROOT),
                port);
    }

    /***
     *
     * @param customer
     * @param host
     * @param protocol
     * @param port
     * @return
     */
    public String generateTaskId(Customer customer, String host, String protocol, int port) {
        return String.format("%s-TASK-%s-%s-%s-%d",
                prefix,
                customer.getName().toUpperCase(Locale.ROOT),
                host.toUpperCase(Locale.ROOT),
                protocol.toUpperCase(Locale.ROOT),
                port);
    }


    /***
     *
     * @param output
     * @return
     * @throws JsonProcessingException
     */
    public CreateTaskResponse readCreateTaskResponse(String output) throws JsonProcessingException {
        return xmlMapper.readValue(output, CreateTaskResponse.class);
    }

    /***
     *
     * @param output
     * @return
     * @throws JsonProcessingException
     */
    public CreatePortListResponse readCreatePortResponse(String output) throws JsonProcessingException {
        return xmlMapper.readValue(output, CreatePortListResponse.class);
    }

    /***
     *
     * @param output
     * @return
     * @throws JsonProcessingException
     */
    public CreateTargetResponse readCreateTargetResponse(String output) throws JsonProcessingException {
        return xmlMapper.readValue(output, CreateTargetResponse.class);
    }
}
