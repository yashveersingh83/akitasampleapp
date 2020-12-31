import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { InforequestStore, InforequestState } from './inforequest.store';

@Injectable({ providedIn: 'root' })
export class InforequestQuery extends QueryEntity<InforequestState> {

  constructor(protected store: InforequestStore) {
    super(store);
  }

}
