import {Component} from '@angular/core';
import {ScanWsMessage} from "../../model/birddog-classes";
import {HttpClient} from "@angular/common/http";
import {BirddogMessageService} from "../../services/birddog-message.service";

@Component({
  selector: 'app-birddog-scan-live',
  templateUrl: './birddog-scan-live.component.html',
  styleUrls: ['./birddog-scan-live.component.scss']
})
export class BirddogScanLiveComponent {

  input = ""
  messages: ScanWsMessage[] = []

  /***
   *
   * @param http
   */
  constructor(private http: HttpClient,
              private ms: BirddogMessageService) {

    this.ms.messages.subscribe(msg => {
      this.messages.push(msg)
    })
  }

  /***
   *
   */
  executeScan() {
    console.log(this.input)
    this.http.post("/api/scan/", this.input).subscribe(result => {
      console.log(result)
    })
  }
}
