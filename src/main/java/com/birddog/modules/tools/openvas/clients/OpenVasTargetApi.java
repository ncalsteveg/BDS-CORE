package com.birddog.modules.tools.openvas.clients;

import com.birddog.BirddogUtil;
import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.tools.openvas.OpenVasUtil;
import com.birddog.modules.tools.openvas.clients.model.xml.CreateTargetResponse;
import com.birddog.modules.tools.openvas.db.OpenVasTargetRepository;
import com.birddog.modules.tools.openvas.model.OpenVasPort;
import com.birddog.modules.tools.openvas.model.OpenVasTarget;
import org.apache.commons.io.IOUtils;

import javax.inject.Singleton;
import java.io.IOException;
import java.nio.charset.Charset;

@Singleton
public class OpenVasTargetApi {

    private final OpenVasTargetRepository repository;

    private final OpenVasUtil openVasUtil;

    public OpenVasTargetApi(OpenVasTargetRepository repository, OpenVasUtil openVasUtil) {
        this.repository = repository;
        this.openVasUtil = openVasUtil;
    }


    /***
     *
     * @param openVasPort
     * @param customer
     * @param host
     * @param protocol
     * @param port
     * @return
     * @throws IOException
     */
    public OpenVasTarget lookupOrCreateTarget(OpenVasPort openVasPort, Customer customer, String host, String protocol, int port) throws IOException {
        var id = openVasUtil.generateTargetId(customer, host, protocol, port);

        //Check to see if this target already exists in the local database
        var optional = repository.findById(id);

        if (optional.isPresent()) {
            return optional.get();
        } else {
            //create a target in OpenVas
            var response = createTarget(id, host, openVasPort.getOvPortId());

            //Create a local target
            var target = new OpenVasTarget(id, response.getId(), openVasPort.getOvPortId(), customer.getName(), host, protocol, port);

            //Insert and return
            return repository.save(target);
        }
    }

    /***
     *
     * @param id
     * @param host
     * @param portId
     * @return
     */
    private CreateTargetResponse createTarget(String id, String host, String portId) throws IOException {

        //create the xml to pass to the cli
        var xml = String.format("<create_target><name>%s</name><hosts>%s</hosts><port_list id='%s'></port_list></create_target>",
                id,
                host,
                portId);


        //create the cmd text to run the cli cmd
        var cmd = openVasUtil.generateCommand(xml);

        //create the process builder to run the command
        ProcessBuilder pb = new ProcessBuilder("bash", "-c", cmd);

        BirddogUtil.debug("TARGET", "CREATING", "%s", cmd);

        //read the output from the command
        String output = IOUtils.toString(pb.start().getInputStream(), Charset.defaultCharset());

        //create to response object from the response xml
        var response = openVasUtil.readCreateTargetResponse(output);

        BirddogUtil.debug("TARGET", "CREATED", "%s", response);

        //return the response
        return response;
    }
}
