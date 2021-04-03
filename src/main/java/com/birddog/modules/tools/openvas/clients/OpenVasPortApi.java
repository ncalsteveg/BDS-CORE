package com.birddog.modules.tools.openvas.clients;


import com.birddog.BirddogUtil;
import com.birddog.modules.tools.openvas.OpenVasUtil;
import com.birddog.modules.tools.openvas.clients.model.xml.CreatePortListResponse;
import com.birddog.modules.tools.openvas.db.OpenVasPortRepository;
import com.birddog.modules.tools.openvas.model.OpenVasPort;
import org.apache.commons.io.IOUtils;

import javax.inject.Singleton;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Locale;

@Singleton
public class OpenVasPortApi {

    //data repo
    private final OpenVasPortRepository repository;

    //OpenVas utility methods
    private final OpenVasUtil openVasUtil;

    public OpenVasPortApi(OpenVasPortRepository repository, OpenVasUtil openVasUtil) {
        this.repository = repository;
        this.openVasUtil = openVasUtil;
    }

    /***
     *
     * @param protocol
     * @param port
     * @return
     * @throws IOException
     */
    public OpenVasPort lookupOrCreatePort(String protocol, int port) throws IOException {

        //create the unique id for the port
        var id = openVasUtil.generatePortId(protocol, port);

        //look to see if we already have the port locally
        var optional = repository.findById(id);

        //check to see if we already have this port registered with OpenVas
        if (optional.isPresent()) {
            //return it, we already have it
            return optional.get();
        } else {

            //Create the port in OpenVas
            var response = createPort(id, protocol, port);

            //return it
            return repository.save(new OpenVasPort(id, protocol, port, response));
        }
    }


    /***
     *
     * @param protocol
     * @param port
     * @return
     * @throws IOException
     */
    public CreatePortListResponse createPort(String id, String protocol, int port) throws IOException {

        var xml = String.format("\"<create_port_list><name>%s</name><port_range>%s:%d</port_range></create_port_list>\"",
                id,
                protocol.toUpperCase(Locale.ROOT).charAt(0),
                port);

        var cmd = openVasUtil.generateCommand(xml);

        BirddogUtil.debug("PORT", "CREATING", "%s", cmd);

        ProcessBuilder pb = new ProcessBuilder("bash",
                "-c",
                cmd
        );

        String output = IOUtils.toString(pb.start().getInputStream(), Charset.defaultCharset());

        var response = openVasUtil.readCreatePortResponse(output);

        BirddogUtil.debug("PORT", "CREATED", "%s", response);

        return response;
    }

}
