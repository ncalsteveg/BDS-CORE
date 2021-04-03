import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {ScanHost} from './scan-host.model';
import {ScanHostPortStore} from "../scan-host-port/scan-host-port.store";

export interface ScanHostState extends EntityState<ScanHost> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'ScanHost'})
export class ScanHostStore extends EntityStore<ScanHostState> {

  constructor(protected scanHostPortStore: ScanHostPortStore) {
    super();
  }

  /**
   * Clear the store
   */
  clear() {
    this.remove()
    this.scanHostPortStore.clear()
  }

}
