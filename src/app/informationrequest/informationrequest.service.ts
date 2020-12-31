import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class InformationrequestService {

  constructor(private httpClient: HttpClient) {}

  informationRequests(): Observable<InformationRequest> {
    return this.httpClient.get<InformationRequest>('http://localhost:3000/infolist');
  }
}

export interface InformationRequest{
  id:number,
  title:string,
  type:string
}
