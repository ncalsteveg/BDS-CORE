package com.birddog.modules.tools.subfinder;

import com.birddog.modules.core.model.BirdDogCommandStatus;
import com.birddog.modules.tools.subfinder.model.SubfinderResults;
import com.birddog.modules.tools.subfinder.model.SubfinderSubDomain;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.micronaut.context.annotation.Value;
import org.apache.commons.io.IOUtils;

import javax.inject.Singleton;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Singleton
public class SubfinderClient {

    @Value("${birddog.tools.subfinder.dir}")
    String toolDir;

    public SubfinderResults execute(List<String> domains) {

        final Map<String, List<SubfinderSubDomain>> results = new HashMap<>();
        final Map<String, BirdDogCommandStatus> statuses = new HashMap<>();

        for (var domain : domains) {
            try {
                var list = execute(toolDir, domain);

                statuses.put(domain, BirdDogCommandStatus.COMPLETE);
                results.put(domain, list);

            } catch (IOException e) {
                //TODO: handle this
                e.printStackTrace();

                statuses.put(domain, BirdDogCommandStatus.ERROR);
            }
        }

        return new SubfinderResults(results, statuses);
    }


    /***
     *
     * @param url
     * @throws IOException
     */
    private ArrayList<SubfinderSubDomain> execute(String workingDirectory, String url) throws IOException {
        ProcessBuilder pb = new ProcessBuilder("./subfinder",
                "-d",
                url,
                "-oJ",
                "-all");
        pb.directory(new File(workingDirectory));

        String output = IOUtils.toString(pb.start().getInputStream(), Charset.defaultCharset());

        ObjectMapper mapper = new ObjectMapper();

        var list = new ArrayList<SubfinderSubDomain>();

        output.lines().forEach(x -> {
            try {
                list.add(mapper.readValue(x, SubfinderSubDomain.class));
            } catch (JsonProcessingException e) {
                //TODO: Add error entry may need to modify results
                e.printStackTrace();
            }
        });

        return list;
    }
}
