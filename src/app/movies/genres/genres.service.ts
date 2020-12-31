import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Genre } from './genre.model';
import { GenresStore } from './genres.store';

@Injectable({ providedIn: 'root' })
export class GenresService {

  constructor(private genresStore: GenresStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Genre[]>('https://api.com').pipe(tap(entities => {
      this.genresStore.set(entities);
    }));
  }

  add(genre: Genre) {
    this.genresStore.add(genre);
  }

  update(id, genre: Partial<Genre>) {
    this.genresStore.update(id, genre);
  }

  remove(id: ID) {
    this.genresStore.remove(id);
  }

}
