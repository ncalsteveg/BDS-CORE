import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {Customer} from './customer.model';

export interface CustomerState extends EntityState<Customer> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Customer' })
export class CustomerStore extends EntityStore<CustomerState> {

  constructor() {
    super();
  }

}
