package com.birddog.modules.tools.openvas;

import com.birddog.modules.core.model.customer.Customer;
import com.birddog.modules.core.model.scan.ScanHostPort;
import com.birddog.modules.tools.openvas.clients.OpenVasPortApi;
import com.birddog.modules.tools.openvas.clients.OpenVasTargetApi;
import com.birddog.modules.tools.openvas.clients.OpenVasTaskApi;
import com.birddog.modules.tools.openvas.model.*;

import javax.inject.Singleton;
import java.io.IOException;

@Singleton
public class OpenVasClient {

    //client for port operations
    private final OpenVasPortApi portApi;

    //client for target operations
    private final OpenVasTargetApi targetApi;

    //client for task operations
    private final OpenVasTaskApi taskApi;


    /***
     *
     * @param portApi
     * @param targetApi
     * @param taskApi
     */
    public OpenVasClient(OpenVasPortApi portApi, OpenVasTargetApi targetApi, OpenVasTaskApi taskApi) {
        this.portApi = portApi;
        this.targetApi = targetApi;
        this.taskApi = taskApi;
    }

    /***
     * Lookup or create a new Port in OpenVas and store the details locally if it does not exist
     * @param scanHostPort
     * @return
     * @throws IOException
     */
    public OpenVasPort lookupOrCreatePort(ScanHostPort scanHostPort) throws IOException {
        return portApi.lookupOrCreatePort(scanHostPort.getProtocol(), scanHostPort.getPortNumber());
    }

    /***
     * Lookup or create a new Target in OpenVas and store the details locally if it does not exist
     * @param port
     * @param customer
     * @param scanHostPort
     * @return
     * @throws IOException
     */
    public OpenVasTarget lookupOrCreateTarget(OpenVasPort port, Customer customer, ScanHostPort scanHostPort) throws IOException {
        return targetApi.lookupOrCreateTarget(port, customer, scanHostPort.getIpAddress(), scanHostPort.getProtocol(), scanHostPort.getPortNumber());
    }


    /***
     * Lookup or create a new Scan for the target and port
     * @param target
     * @param port
     * @param status
     * @return
     */
    public OpenVasScan createScan(OpenVasTarget target, OpenVasPort port, OpenvasScanStatus status) {
        return new OpenVasScan(target, port, status);
    }


    /***
     * Create a task using the default scan config and scanner set in the application.yml
     * @param customer
     * @param ovTarget
     */
    public OpenVasTask createTask(Customer customer, OpenVasTarget ovTarget) throws IOException {
        return taskApi.createTask(customer, ovTarget);
    }

    /***
     * Find all the tasks based on the status passed in
     * @param status
     * @return
     */
    public Iterable<OpenVasTask> findTaskByStatus(OpenVasTaskStatus status) {
        return taskApi.findByStatus(status);
    }

    /***
     * Start a task
     * @param task
     */
    public OpenVasTask startTask(OpenVasTask task) {
        return taskApi.startTask(task);
    }

    /**
     * Check to see if a task is currently running in OpenVas
     *
     * @param task
     * @return
     */
    public boolean isTaskRunning(OpenVasTask task) {
        return false;
    }

    /***
     * Complete a task
     * @param task
     * @return
     */
    public OpenVasTask complete(OpenVasTask task) {
        return task;
    }
}
