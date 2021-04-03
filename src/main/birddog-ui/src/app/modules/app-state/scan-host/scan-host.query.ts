import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ScanHostState, ScanHostStore} from './scan-host.store';
import {ScanHostPortService} from "../scan-host-port/scan-host-port.service";
import {ScanHost} from "./scan-host.model";

@Injectable({ providedIn: 'root' })
export class ScanHostQuery extends QueryEntity<ScanHostState> {

  constructor(protected store: ScanHostStore, protected scanHostPortService: ScanHostPortService) {
    super(store);
  }
  /***
   * Set the active scan job
   * @param scanJob
   */
  setActive(scanHost: ScanHost): void {
    this.store.setActive(scanHost.id);

    //populate the jobs for the selected customer
    this.scanHostPortService.populateByScanHostId(scanHost.id).subscribe(response => {
      console.log("scan host store set to scan job = " + scanHost.id)
    });
  }
}
