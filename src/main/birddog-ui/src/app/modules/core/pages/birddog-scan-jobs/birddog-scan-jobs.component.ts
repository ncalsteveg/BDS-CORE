import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {CustomerQuery} from "../../../app-state/customer/customer.query";
import {HttpClient} from "@angular/common/http";
import {ScanWsMessage} from "../../model/birddog-classes";
import {BirddogMessageService} from "../../services/birddog-message.service";

@Component({
  selector: 'app-birddog-scan-jobs',
  templateUrl: './birddog-scan-jobs.component.html',
  styleUrls: ['./birddog-scan-jobs.component.scss']
})
export class BirddogScanJobsComponent {

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.router.navigateByUrl("customer")
  }


  messages: ScanWsMessage[] = []

  constructor(private router: Router,
              private http: HttpClient,
              private customerQuery: CustomerQuery,
              private ms: BirddogMessageService) {
    this.ms.messages.subscribe(msg => {
      this.messages.push(msg)
    })
  }

  /**
   * Display the jobs for the customer
   */
  onScanJobSelected(): void {
    this.router.navigateByUrl('domains')
  }

  /***
   * Execute a  scan job for this customer
   */
  executeScanJob(): void {

    //TODO: We should not be able to get here
    //Make sure the active id is set
    if (this.customerQuery.hasActive()) {
      this.http.post("/api/scan/", this.customerQuery.getActiveId()).subscribe(result => {
        console.log(result)
      })
    }
  }
}
