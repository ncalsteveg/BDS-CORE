import {Component} from '@angular/core';
import {ScanHostPort} from "../../../app-state/scan-host-port/scan-host-port.model";
import {ScanHostPortQuery} from "../../../app-state/scan-host-port/scan-host-port.query";

@Component({
  selector: 'app-scan-host-ports',
  templateUrl: './scan-host-ports.component.html',
  styleUrls: ['./scan-host-ports.component.scss']
})
export class ScanHostPortsComponent {

  entities: ScanHostPort[] = []

  constructor(private query: ScanHostPortQuery) {
    query.selectAll().subscribe(result => {
      this.entities=result
    })
  }

}
