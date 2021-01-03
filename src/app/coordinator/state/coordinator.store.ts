import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Coordinator } from './coordinator.model';

export interface CoordinatorState extends EntityState<Coordinator> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'coordinator' })
export class CoordinatorStore extends EntityStore<CoordinatorState> {

  constructor() {
    super();
  }

}
