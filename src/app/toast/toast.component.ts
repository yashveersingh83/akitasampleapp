import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalNotificationService } from '../global.services/global.notification.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  message : string;
  constructor(  private notification:GlobalNotificationService ) { }

  ngOnInit(): void {

    this.notification.notificationModel$.subscribe (
    action=>{ 
      console.log(action);
      this.message ='Store Name ' + action.storeName +  '  method  ' + action.method.toString() + '  Count  ' + action.payload?.length + '  '
    }
    )
  }

}
