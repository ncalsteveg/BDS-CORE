import {Component, EventEmitter, Output} from '@angular/core';
import {ScanJobQuery} from "../../../app-state/scan-job/scan-job.query";
import {ScanJob} from "../../../app-state/scan-job/scan-job.model";

@Component({
  selector: 'app-scan-jobs',
  templateUrl: './scan-jobs.component.html',
  styleUrls: ['./scan-jobs.component.scss']
})
export class ScanJobsComponent {

  /**
   * Trigger when a customer is selected
   */
  @Output()
  onScanJobSelected: EventEmitter<ScanJob> = new EventEmitter<ScanJob>(false);

  entities: ScanJob[] = []

  constructor(private query: ScanJobQuery) {
    query.selectAll().subscribe(results => {
      this.entities = results;
    })
  }

  /**
   * Select a customer and navigate to the scan jobs page
   * @param customer
   */
  selectScanJob(scanJob: ScanJob): void {
    //set the active customer
    this.query.setActive(scanJob)

    //let who ever holds this component that a customer was selected
    this.onScanJobSelected.emit(scanJob)
  }
}
