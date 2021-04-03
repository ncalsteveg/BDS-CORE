import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {ScanDomain} from './scan-domain.model';
import {ScanHostStore} from "../scan-host/scan-host.store";

export interface ScanDomainState extends EntityState<ScanDomain> {
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'ScanDomain'})
export class ScanDomainStore extends EntityStore<ScanDomainState> {

  constructor(protected scanHostStore: ScanHostStore) {
    super();
  }

  /**
   * Clear the store
   */
  clear() {
    this.remove()
    this.scanHostStore.clear()
  }
}
