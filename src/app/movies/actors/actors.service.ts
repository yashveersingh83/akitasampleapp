import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Actor } from './actor.model';
import { ActorsStore } from './actors.store';

@Injectable({ providedIn: 'root' })
export class ActorsService {

  constructor(private actorsStore: ActorsStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Actor[]>('https://api.com').pipe(tap(entities => {
      this.actorsStore.set(entities);
    }));
  }

  add(actor: Actor) {
    this.actorsStore.add(actor);
  }

  update(id, actor: Partial<Actor>) {
    this.actorsStore.update(id, actor);
  }

  remove(id: ID) {
    this.actorsStore.remove(id);
  }

}
