import {Injectable} from '@angular/core';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import {ScanJob} from './scan-job.model';

export interface ScanJobState extends EntityState<ScanJob> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ScanJob' })
export class ScanJobStore extends EntityStore<ScanJobState> {

  constructor() {
    super();
  }

}
