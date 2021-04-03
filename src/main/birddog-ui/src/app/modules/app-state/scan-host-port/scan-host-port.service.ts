import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {ScanHostPortState, ScanHostPortStore} from './scan-host-port.store';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {ScanHostPort} from "./scan-host-port.model";

@Injectable({ providedIn: 'root' })
export class ScanHostPortService extends NgEntityService<ScanHostPortState> {

  constructor(protected store: ScanHostPortStore) {
    super(store);
  }


  /***
   * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
   * @param customerId
   */
  populateByScanHostId(scanHostId: string): Observable<ScanHostPort[]> {

    //indicate we are loading
    this.store.setLoading(true)

    //remove the items from the store
    this.store.remove()

    //populate the store and return the results to be nice
    return this.getHttp().get<ScanHostPort[]>('api/entities/ScanHostPort/' + scanHostId).pipe(
      tap(entities => {
        this.store.add(entities)
        this.store.setLoading(false)
      })
    )
  }
}
