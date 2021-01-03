import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { InforequestState, InforequestStore } from './inforequest.store';

@NgEntityServiceConfig({
  resourceName: 'inforequests'
 
})

@Injectable({ providedIn: 'root' })
export class InforequestService extends NgEntityService<InforequestState> {

  constructor(protected store: InforequestStore) {
    super(store);
  }

}
