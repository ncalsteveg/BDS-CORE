package com.birddog.modules.tools.openvas.clients;

import com.birddog.BirddogUtil;
import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.tools.openvas.OpenVasUtil;
import com.birddog.modules.tools.openvas.db.OpenVasTaskRepository;
import com.birddog.modules.tools.openvas.model.OpenVasTarget;
import com.birddog.modules.tools.openvas.model.OpenVasTask;
import com.birddog.modules.tools.openvas.model.OpenVasTaskStatus;
import io.micronaut.context.annotation.Value;
import org.apache.commons.io.IOUtils;

import javax.inject.Singleton;
import java.io.IOException;
import java.nio.charset.Charset;

@Singleton
public class OpenVasTaskApi {

    @Value("${birddog.tools.openvas.ovScanConfigId}")
    String ovScanConfigId; //the scan to use when creating tasks

    @Value("${birddog.tools.openvas.ovScannerId}")
    String ovScannerId; // the scanner to user when creating tasks

    //data repo
    private final OpenVasTaskRepository repository;

    //OpenVas utility methods
    private final OpenVasUtil openVasUtil;

    public OpenVasTaskApi(OpenVasTaskRepository repository, OpenVasUtil openVasUtil) {
        this.repository = repository;
        this.openVasUtil = openVasUtil;
    }


    /***
     * Create a new Task
     * @param customer
     * @param target
     * @return
     * @throws IOException
     */
    public OpenVasTask createTask(Customer customer, OpenVasTarget target) throws IOException {

        //generate the id for this task
        var id = openVasUtil.generateTaskId(customer, target.getHost(), target.getProtocol(), target.getPort());

        //Create the XML for the command
        var xml = String.format("""
                        <create_task>
                           <name>%s</name>
                           <comment>%s</comment>
                           <config id="%s"/>
                           <target id="%s"/>
                         </create_task>
                        """,
                id,
                "Birddog Scan Task",
                ovScanConfigId,
                target.getOvTargetId());

        //create the cmd text to run the cli cmd
        var cmd = openVasUtil.generateCommand(xml);

        BirddogUtil.debug("TASK", "CREATING", "%s", cmd);

        ProcessBuilder pb = new ProcessBuilder("bash",
                "-c",
                cmd
        );

        String output = IOUtils.toString(pb.start().getInputStream(), Charset.defaultCharset());

        //get the response
        var response = openVasUtil.readCreateTaskResponse(output);

        BirddogUtil.debug("TASK", "CREATED", "%s", cmd);

        //insert and return the new task
        return repository.save(new OpenVasTask(id, response));
    }


    /***
     * Start a task
     * @param task
     */
    public OpenVasTask startTask(OpenVasTask task) {
        var xml = String.format("""
                        <start_task task_id="%s"/>
                        """,
                task.getId());


        return task;
    }


    /***
     *
     * @param status
     * @return
     */
    public Iterable<OpenVasTask> findByStatus(OpenVasTaskStatus status) {
        return repository.findByStatus(status);
    }
}
