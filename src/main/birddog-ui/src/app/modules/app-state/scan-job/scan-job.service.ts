import {Injectable} from '@angular/core';
import {NgEntityService} from '@datorama/akita-ng-entity-service';
import {ScanJobState, ScanJobStore} from './scan-job.store';
import {Observable} from "rxjs";
import {ScanJob} from "./scan-job.model";
import {tap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class ScanJobService extends NgEntityService<ScanJobState> {

  constructor(protected store: ScanJobStore) {
    super(store);
  }


  /***
   * Populate the ScanJob store for the customerId passed in, this makes us able to query the store from anywhere in the app
   * @param customerId
   */
  populateByCustomerId(customerId: string): Observable<ScanJob[]> {


    //indicate we are loading
    this.store.setLoading(true)

    //remove the items from the store
    this.store.remove()

    //populate the store and return the results to be nice
    return this.getHttp().get<ScanJob[]>('api/entities/ScanJob/' + customerId).pipe(
      tap(entities => {
        this.store.add(entities)
        this.store.setLoading(false)
      })
    )
  }

}
