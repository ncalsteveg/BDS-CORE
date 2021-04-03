import {Injectable} from '@angular/core';
import {QueryEntity} from '@datorama/akita';
import {ScanHostPortState, ScanHostPortStore} from './scan-host-port.store';

@Injectable({ providedIn: 'root' })
export class ScanHostPortQuery extends QueryEntity<ScanHostPortState> {

  constructor(protected store: ScanHostPortStore) {
    super(store);
  }

}
