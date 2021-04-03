import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {ScanDomainState, ScanDomainStore} from './scan-domain.store';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ScanDomain} from "./scan-domain.model";
import {ScanHostStore} from "../scan-host/scan-host.store";

@Injectable({ providedIn: 'root' })
export class ScanDomainService extends NgEntityService<ScanDomainState> {

  constructor(protected store: ScanDomainStore, protected scanHostStore:ScanHostStore) {
    super(store);
  }


  /***
   * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
   * @param customerId
   */
  populateByScanJob(scanJobId: string): Observable<ScanDomain[]> {


    //indicate we are loading
    this.store.setLoading(true)

    //remove the items from the store
    this.store.clear()

    //populate the store and return the results to be nice
    return this.getHttp().get<ScanDomain[]>('api/entities/ScanDomain/' + scanJobId).pipe(
      tap(entities => {
        this.store.add(entities)
        this.store.setLoading(false)
      })
    )
  }
}
