package com.birddog.modules.tools.dig;

import com.birddog.modules.tools.dig.model.DigEntries;
import com.birddog.modules.tools.dig.model.DigEntry;
import io.micronaut.context.annotation.Value;
import org.apache.commons.io.IOUtils;

import javax.inject.Singleton;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;

@Singleton
public class DigClient {

    @Value("${birddog.tools.subfinder.dir}")
    String toolDir;

    public DigEntries execute(String url) throws IOException {

        ProcessBuilder pb = new ProcessBuilder("./runDig.sh", url);
        pb.directory(new File(toolDir));

        String output = IOUtils.toString(pb.start().getInputStream(), Charset.defaultCharset());

        var results = new DigEntries();

        output.lines().forEach(line -> {
            if (!line.startsWith(";")) {
                var vals = line.split("[^a-zA-Z0-9\\@\\-\\.\\/\\:]");

                if (vals.length == 5) {

                    String name = vals[0];
                    String ttl = vals[1];
                    String digClass = vals[2];
                    String digType = vals[3];
                    String ipAddress = vals[4];

                    var entry = new DigEntry(name, ttl, digClass, digType, ipAddress);

                    results.add(entry);
                }

                if (vals.length == 6) {

                    String name = vals[0];
                    String ttl = vals[2];
                    String digClass = vals[3];
                    String digType = vals[4];
                    String ipAddress = vals[5];

                    var entry = new DigEntry(name, ttl, digClass, digType, ipAddress);

                    results.add(entry);
                }
            }
        });

        return results;
    }
}
