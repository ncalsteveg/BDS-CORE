import {Component, EventEmitter, Output} from '@angular/core';
import {ScanHost} from "../../../app-state/scan-host/scan-host.model";
import {ScanHostQuery} from "../../../app-state/scan-host/scan-host.query";

@Component({
  selector: 'app-scan-hosts',
  templateUrl: './scan-hosts.component.html',
  styleUrls: ['./scan-hosts.component.scss']
})
export class ScanHostsComponent {

  @Output()
  onScanHostSelected: EventEmitter<ScanHost> = new EventEmitter<ScanHost>(false);

  entities: ScanHost[] = []

  constructor(private query: ScanHostQuery) {
    query.selectAll().subscribe(results => {
      this.entities = results;
    })
  }

  /**
   *
   * @param scanDomain
   */
  selectScanDomain(scanHost: ScanHost): void {
    //set the active customer
    this.query.setActive(scanHost)

    //let who ever holds this component that a customer was selected
    this.onScanHostSelected.emit(scanHost)
  }
}
