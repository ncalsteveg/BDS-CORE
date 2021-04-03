//package com.birddog.modules.tools.openvas.rest;
//
//
//import com.birddog.modules.tools.openvas.OpenVasClient;
//import com.birddog.modules.tools.openvas.model.OpenVasPort;
//import io.micronaut.http.annotation.Controller;
//import io.micronaut.http.annotation.Get;
//import io.micronaut.http.annotation.PathVariable;
//import io.micronaut.security.annotation.Secured;
//import io.micronaut.security.rules.SecurityRule;
//
//import java.io.IOException;
//
//@Secured(SecurityRule.IS_ANONYMOUS)
//@Controller
//public class RestVasController {
//    private final OpenVasClient openvasClient;
//
//    public RestVasController(OpenVasClient openvasClient) {
//        this.openvasClient = openvasClient;
//    }
//
////    @Get(value = "/initialize/{protocol}/{port}")
////    public OpenVasPort initialize(@PathVariable String protocol, int port) throws IOException {
////
////        var result = openvasClient.lookupOrCreatePort(protocol, port);
////
////        return result;
////    }
//
////    @Get(value = "/target/{name}/{host}/{protocol}/{port}")
////    public String target(@PathVariable String name, @PathVariable String host, @PathVariable String protocol, @PathVariable int port) throws IOException {
////        var result = openvasClient.lookupOrCreateTarget(name, host, protocol, port);
////
////        return result;
////    }
//}
