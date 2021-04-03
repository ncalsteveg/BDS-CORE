import {Component, EventEmitter, Output} from '@angular/core';
import {CustomerQuery} from "../../../app-state/customer/customer.query";
import {Customer} from "../../../app-state/customer/customer.model";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {

  /**
   * Trigger when a customer is selected
   */
  @Output()
  onCustomerSelected: EventEmitter<Customer> = new EventEmitter<Customer>(false);

  entities: Customer[] = []

  constructor(private query: CustomerQuery) {
    query.selectAll().subscribe(result => {
      this.entities = result;
    })
  }


  /**
   * Select a customer and navigate to the scan jobs page
   * @param customer
   */
  selectCustomer(customer: Customer): void {
    //set the active customer
    this.query.setActive(customer)

    //let who ever holds this component that a customer was selected
    this.onCustomerSelected.emit(customer)
  }
}
