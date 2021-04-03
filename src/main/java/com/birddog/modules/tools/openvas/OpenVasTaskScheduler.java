package com.birddog.modules.tools.openvas;

import com.birddog.BirddogUtil;
import com.birddog.modules.tools.openvas.model.OpenVasTaskStatus;
import io.micronaut.context.annotation.Value;

import javax.inject.Singleton;

@Singleton
public class OpenVasTaskScheduler {

    @Value("${birddog.tools.openvas.maxConcurrentTasks}")
    int maxConcurrentTasks;

    private final OpenVasClient openVasClient;

    public OpenVasTaskScheduler(OpenVasClient openVasClient) {
        this.openVasClient = openVasClient;
    }

    /***
     *
     */
    //@Scheduled(fixedDelay = "100000")
    public void run() {

        //keep track of how many we have running
        int currentlyRunning = 0;

        //iterate over all the instances that have been started
        for (var running : openVasClient.findTaskByStatus(OpenVasTaskStatus.RUNNING)) {

            if (openVasClient.isTaskRunning(running)) {
                currentlyRunning++;
            } else {
                //1. complete the task
                openVasClient.complete(running);
            }
        }

        //Determine if we have any open slots we can use to start another task
        int openSlots = maxConcurrentTasks - currentlyRunning;

        //if there are open slots
        if (openSlots > 0) {

            int submitted = 0;

            //Iterate over all the tasks that are in create state, they have not been ran yet
            for (var ovTask : openVasClient.findTaskByStatus(OpenVasTaskStatus.CREATED)) {
                var started = openVasClient.startTask(ovTask);

                BirddogUtil.debug("TASK", "STARTING", "%s", started);

                submitted++;

                if (submitted >= openSlots) {
                    break;
                }
            }
        }
    }
}
