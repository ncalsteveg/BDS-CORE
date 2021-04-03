package com.birddog.modules.core.rest;

import com.birddog.BirddogUtil;
import com.birddog.modules.core.model.messaging.ScanWsMessage;
import com.birddog.modules.tools.openvas.OpenVasUtil;
import io.micronaut.security.annotation.Secured;
import io.micronaut.security.rules.SecurityRule;
import io.micronaut.websocket.WebSocketBroadcaster;
import io.micronaut.websocket.WebSocketSession;
import io.micronaut.websocket.annotation.OnMessage;
import io.micronaut.websocket.annotation.OnOpen;
import io.micronaut.websocket.annotation.ServerWebSocket;
import org.reactivestreams.Publisher;

import javax.inject.Singleton;
import java.util.function.Predicate;

@Secured(SecurityRule.IS_ANONYMOUS)
@ServerWebSocket("/ws/scan/{topic}/")
@Singleton
public class ScanWebSocket {

    private final WebSocketBroadcaster broadcaster;

    public ScanWebSocket(WebSocketBroadcaster broadcaster) {
        this.broadcaster = broadcaster;
    }

    @OnOpen
    public Publisher<ScanWsMessage> onOpen(String topic, WebSocketSession socketSession) {
        return broadcaster.broadcast(new ScanWsMessage(), isValid(topic));
    }

    @OnMessage
    public Publisher<ScanWsMessage> onMessage(String topic, ScanWsMessage message, WebSocketSession socketSession) {
        return broadcaster.broadcast(message, isValid(topic));
    }

    private Predicate<WebSocketSession> isValid(String topic) {
        return s -> topic.equalsIgnoreCase(s.getUriVariables().get("topic", String.class, null));
    }

    /***
     *
     * @param message
     */
    public void broadcast(ScanWsMessage message) {

        BirddogUtil.debug("WEBSOCKET", "BROADCAST", "%s", message);

        broadcaster.broadcastSync(message, isValid("topic"));
    }
}
