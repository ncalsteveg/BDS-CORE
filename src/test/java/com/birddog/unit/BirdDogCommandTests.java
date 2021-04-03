package com.birddog.unit;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.Test;


public class BirdDogCommandTests {

    @Test
    public void testXml() throws JsonProcessingException {

    }

//    @Test
//    public void testSubFinderCommand() throws IOException {
//        var workingDir = "/home/stevegillis/Downloads/Lucee-main/";
//
//        var cmd = new SubfinderCommand(workingDir, List.of("shepleybulfinch.com"));
//
//        BirdDogCommandRunner.execute(cmd);
//
//        for (var statusEntry : cmd.getStatuses().entrySet()) {
//
//            System.out.println(String.format("******** Processing Domain =  %s", statusEntry.getKey()));
//
//            switch (statusEntry.getValue()) {
//                case COMPLETE -> {
//                    for (var subFound : cmd.getResults().get(statusEntry.getKey())) {
//
//                        var digCommand = new DigCommand("/home/stevegillis/Downloads/Lucee-main/", subFound.getHost());
//
//                        System.out.println(String.format("******** Digging host =  %s", subFound.getHost()));
//
//                        BirdDogCommandRunner.execute(digCommand);
//
//                        for (var dug : digCommand.getResults()) {
//                            System.out.println("    dug-> " + dug);
//                        }
//                    }
//                }
//                case ERROR -> {
//                    System.out.println("EROR");
//                }
//            }
//        }
//    }
//
//
//    @Test
//    public void testDigCommand() throws IOException {
//
//        var cmd = new DigCommand("/home/stevegillis/Downloads/Lucee-main/", "www.office365.com");
//
//        BirdDogCommandRunner.execute(cmd);
//
//        System.out.println(Arrays.asList(cmd.getResults()));
//    }
//
//
//    @Test
//    public void digParseTest() {
//        var output = """
//                ; <<>> DiG 9.16.6-Ubuntu <<>> a www.office365.com +nocomments +noquestion +noauthority +noadditional +nostats
//                ;; global options: +cmd
//                www.office365.com.	1059	IN	CNAME	office365.com.
//                office365.com.		300	IN	A	52.165.129.203
//                office365.com.		300	IN	A	13.90.213.204
//                """;
//
//
//        output.lines().forEach(line -> {
//            if (!line.startsWith(";")) {
//                var vals = line.split("[^a-zA-Z0-9\\@\\-\\.\\/\\:]");
//                System.out.println(Arrays.asList(vals));
//            }
//        });
//
//    }
//
//    @Test
//    public void testNmapCommand() throws IOException {
//        NmapCommand command = new NmapCommand("127.0.0.1");
//
//        BirdDogCommandRunner.execute(command);
//
//        var optional = command.getNmapRun();
//
//        if (optional.isPresent()) {
//            var run = optional.get();
//
//            var stats = run.getRunstats();
//
//            if (stats != null) {
//
//                if (stats.getHosts() != null) {
//
//                    if (stats.getHosts().up > 0) {
//
//                        if (run.getHost() != null && run.getHost().getPorts() != null) {
//                            for (var port : run.getHost().getPorts().port) {
//                                System.out.println(port);
//                            }
//                        }
//
//                    } else {
//                        System.out.println("HOST DOWN: ");
//                    }
//                }
//            }
//        }
//    }
}
