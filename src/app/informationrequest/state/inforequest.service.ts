import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Inforequest } from './inforequest.model';
import { InforequestStore } from './inforequest.store';

@Injectable({ providedIn: 'root' })
export class InforequestService {

   url:string ='http://localhost:3000/inforequests';

  constructor(private inforequestStore: InforequestStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Inforequest[]>(this.url).pipe(tap(entities => {
      this.inforequestStore.set(entities);
    }));
  }

  add(inforequest: Inforequest) {
    
    this.http.post(this.url,inforequest).subscribe(res=>
      {
  
        this.inforequestStore.add(inforequest);
      }
      );
  }
  

  update(id, inforequest: Partial<Inforequest>) {
   
    this.http.put(this.url,inforequest.id).subscribe(res=>
      {
  
        this.inforequestStore.update(id, inforequest);
      }
      );;
  }

  remove(id: number) {
  
    this.http.delete(this.url+'/'+id).subscribe(
      s=> {this.inforequestStore.remove(id);}

    );
  }

}
