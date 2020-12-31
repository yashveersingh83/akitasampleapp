import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MilestoneStore, MilestoneState } from './milestone.store';

@Injectable({ providedIn: 'root' })
export class MilestoneQuery extends QueryEntity<MilestoneState> {

  constructor(protected store: MilestoneStore) {
    super(store);
  }

}
