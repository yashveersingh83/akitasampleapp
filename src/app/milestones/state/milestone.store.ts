import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Milestone } from './milestone.model';

export interface MilestoneState extends EntityState<Milestone> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'milestone' })
export class MilestoneStore extends EntityStore<MilestoneState> {

  constructor() {
    super();
  }

}
