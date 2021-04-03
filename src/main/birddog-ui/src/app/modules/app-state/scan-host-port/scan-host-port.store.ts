import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {ScanHostPort} from './scan-host-port.model';

export interface ScanHostPortState extends EntityState<ScanHostPort> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ScanHostPort' })
export class ScanHostPortStore extends EntityStore<ScanHostPortState> {

  constructor() {
    super();
  }

  clear() {
    this.remove()
  }

}
