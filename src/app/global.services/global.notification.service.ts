import { Injectable } from "@angular/core";
import { ActionType, EntityServiceAction, HttpMethod, NgEntityServiceNotifier } from "@datorama/akita-ng-entity-service";
import { Observable, ObservableInput } from "rxjs";
@Injectable({ providedIn: 'root' })
export class GlobalNotificationService {
notificationModel$:Observable< EntityServiceAction>;
    constructor(
      private notifier: NgEntityServiceNotifier
    ) {}
  
    listen() {
      this.notificationModel$ =  this.notifier.action$;
    }
  }


  interface NotificationModel 
  {
    storeName: string;
  type: ActionType; // success/error
  payload: any; // response from the server
  method: HttpMethod;
  successMsg?: string;
  errorMsg?: string;

  }