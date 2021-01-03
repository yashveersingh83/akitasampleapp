import { Injectable } from '@angular/core';
import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';
import { CoordinatorStore, CoordinatorState } from './coordinator.store';

@NgEntityServiceConfig({
  resourceName: 'coordinators'
 
})

@Injectable({ providedIn: 'root' })
export class CoordinatorService extends NgEntityService<CoordinatorState> {

  constructor(protected store: CoordinatorStore) {
    super(store);
  }

}
  