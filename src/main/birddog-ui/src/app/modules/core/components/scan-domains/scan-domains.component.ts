import {Component, EventEmitter, Output} from '@angular/core';
import {ScanDomain} from "../../../app-state/scan-domain/scan-domain.model";
import {ScanDomainQuery} from "../../../app-state/scan-domain/scan-domain.query";

@Component({
  selector: 'app-scan-domains',
  templateUrl: './scan-domains.component.html',
  styleUrls: ['./scan-domains.component.scss']
})
export class ScanDomainsComponent  {

  @Output()
  onScanDomainSelected: EventEmitter<ScanDomain> = new EventEmitter<ScanDomain>(false);

  entities: ScanDomain[] = []

  constructor(private query: ScanDomainQuery) {
    query.selectAll().subscribe(result => {
      this.entities = result;
    })
  }


  /**
   *
   * @param scanDomain
   */
  selectScanDomain(scanDomain: ScanDomain): void {
    //set the active customer
    this.query.setActive(scanDomain)

    //let who ever holds this component that a customer was selected
    this.onScanDomainSelected.emit(scanDomain)
  }

}
