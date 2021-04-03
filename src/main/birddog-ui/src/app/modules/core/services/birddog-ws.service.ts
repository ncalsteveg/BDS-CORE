import {Injectable} from '@angular/core';

import {Observable, Observer, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BirddogWsService {

  private subject: Subject<MessageEvent> | undefined

  /***
   * Connect to the bird dog web socket
   * @param url
   */
  public connect(url: string): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url)
    }

    return this.subject
  }

  /**
   *
   * @param url
   * @private
   */
  private create(url: string): Subject<MessageEvent> {
    const ws = new WebSocket(url)

    const observable = Observable.create((obs: Observer<MessageEvent>) => {
      ws.onmessage = obs.next.bind(obs)
      ws.onerror = obs.error.bind(obs)
      ws.onclose = obs.complete.bind(obs)
      return ws.close.bind(ws)
    });

    const observer = {
      next: (data: any) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify(data))
        }
      }
    }

    return Subject.create(observer, observable)
  }
}
