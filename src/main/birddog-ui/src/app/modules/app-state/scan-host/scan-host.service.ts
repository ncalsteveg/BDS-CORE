import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {ScanHostState, ScanHostStore} from './scan-host.store';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ScanHost} from "./scan-host.model";

@Injectable({providedIn: 'root'})
export class ScanHostService extends NgEntityService<ScanHostState> {

  constructor(protected store: ScanHostStore) {
    super(store);
  }


  /***
   * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
   * @param customerId
   */
  populateByScanDomain(scanDomainId: string): Observable<ScanHost[]> {


    //indicate we are loading
    this.store.setLoading(true)

    //remove the items from the store
    this.store.remove()

    //populate the store and return the results to be nice
    return this.getHttp().get<ScanHost[]>('api/entities/ScanHost/' + scanDomainId).pipe(
      tap(entities => {
        this.store.add(entities)
        this.store.setLoading(false)
      })
    )
  }
}
