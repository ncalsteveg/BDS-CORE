import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ScanJobState, ScanJobStore} from './scan-job.store';
import {ScanDomainService} from "../scan-domain/scan-domain.service";
import {ScanJob} from "./scan-job.model";

@Injectable({providedIn: 'root'})
export class ScanJobQuery extends QueryEntity<ScanJobState> {

  constructor(protected store: ScanJobStore, protected scanDomainService: ScanDomainService) {
    super(store);
  }

  /***
   * Set the active scan job
   * @param scanJob
   */
  setActive(scanJob: ScanJob): void {
    this.store.setActive(scanJob.id);

    //populate the jobs for the selected customer
    this.scanDomainService.populateByScanJob(scanJob.id).subscribe(response => {
      console.log("scan domain store set to scan job = " + scanJob.id)
    });
  }

}
