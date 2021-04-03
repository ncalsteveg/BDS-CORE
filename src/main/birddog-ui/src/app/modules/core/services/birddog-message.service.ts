import {Injectable} from '@angular/core';
import {BirddogWsService} from "./birddog-ws.service";
import {Subject} from "rxjs";
import {ScanWsMessage} from "../model/birddog-classes";

@Injectable({
  providedIn: 'root'
})
export class BirddogMessageService {

  public messages: Subject<ScanWsMessage> = new Subject<ScanWsMessage>()

  constructor(private ws: BirddogWsService) {
    ws.connect("ws://" + location.hostname + ":" + location.port + "/ws/scan/topic").subscribe((message: MessageEvent) => {
      this.messages.next(JSON.parse(message.data) as ScanWsMessage)
    })
  }
}
