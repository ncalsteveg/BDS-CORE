import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ScanDomainState, ScanDomainStore} from './scan-domain.store';
import {ScanDomain} from "./scan-domain.model";
import {ScanHostService} from "../scan-host/scan-host.service";

@Injectable({ providedIn: 'root' })
export class ScanDomainQuery extends QueryEntity<ScanDomainState> {

  constructor(protected store: ScanDomainStore, protected scanHostService:ScanHostService) {
    super(store);
  }



  /***
   * Set the active scan job
   * @param scanJob
   */
  setActive(scanDomain: ScanDomain): void {
    this.store.setActive(scanDomain.id);

    //populate the jobs for the selected customer
    this.scanHostService.populateByScanDomain(scanDomain.id).subscribe(response => {
      console.log("scan host store set to scan job = " + scanDomain.id)
    });
  }

}
