import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {CustomerState, CustomerStore} from './customer.store';
import {Customer} from "./customer.model";
import {ScanJobService} from "../scan-job/scan-job.service";

@Injectable({providedIn: 'root'})
export class CustomerQuery extends QueryEntity<CustomerState> {

  constructor(protected store: CustomerStore, protected scanJobService: ScanJobService) {
    super(store);
  }

  setActive(customer: Customer): void {
    this.store.setActive(customer.id);


    //populate the jobs for the selected customer
    this.scanJobService.populateByCustomerId(customer.id).subscribe(response => {
      console.log("scan job store set to customer = " + customer.id)
    });
  }

}
