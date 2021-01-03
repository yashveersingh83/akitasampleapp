import { Injectable } from '@angular/core';
import { MilestoneStore,MilestoneState } from './milestone.store';

import { NgEntityService, NgEntityServiceConfig } from '@datorama/akita-ng-entity-service';


@NgEntityServiceConfig({
  resourceName: 'milestones'
 
})

@Injectable({ providedIn: 'root' })
export class MilestoneService extends NgEntityService<MilestoneState> {

  constructor(protected store: MilestoneStore) {
    super(store);
  }

}
