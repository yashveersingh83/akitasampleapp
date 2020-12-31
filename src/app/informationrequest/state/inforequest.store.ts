import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Inforequest } from './inforequest.model';

export interface InforequestState extends EntityState<Inforequest> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'inforequest' })
export class InforequestStore extends EntityStore<InforequestState> {

  constructor() {
    super();
  }

}
