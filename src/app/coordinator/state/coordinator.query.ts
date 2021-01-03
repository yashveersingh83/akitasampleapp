import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CoordinatorStore, CoordinatorState } from './coordinator.store';

@Injectable({ providedIn: 'root' })
export class CoordinatorQuery extends QueryEntity<CoordinatorState> {

  constructor(protected store: CoordinatorStore) {
    super(store);
  }

}
