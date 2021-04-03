import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {CustomerState, CustomerStore} from './customer.store';

@Injectable({ providedIn: 'root' })
export class CustomerService extends NgEntityService<CustomerState> {

  constructor(protected store: CustomerStore) {
    super(store);
  }

}
