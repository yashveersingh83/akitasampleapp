import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Milestone } from './milestone.model';
import { MilestoneStore } from './milestone.store';

@Injectable({ providedIn: 'root' })
export class MilestoneService {
  url: string = 'http://localhost:3000/milestones';
  constructor(
    private milestoneStore: MilestoneStore,
    private http: HttpClient
  ) {}

  get() {
    return this.http.get<Milestone[]>(this.url).pipe(
      tap((entities) => {
        this.milestoneStore.set(entities);
      })
    );
  }

  add(milestone: Milestone) {
    this.http.post(this.url, milestone).subscribe((res) => {
      
      this.milestoneStore.add(milestone);
    });
  }

  update(id, milestone: Partial<Milestone>) {
    this.http.put(this.url, milestone.id).subscribe((res) => {
      this.milestoneStore.update(id, milestone);
    });
  }

  remove(id: ID) {
    this.http.delete(this.url + '/' + id).subscribe((s) => {
      this.milestoneStore.remove(id);
    });
  }
}
