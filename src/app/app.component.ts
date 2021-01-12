import { Component, OnInit } from '@angular/core';
import { GlobalNotificationService } from './global.services/global.notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movieapp';
  constructor(
    private notificationservice: GlobalNotificationService
    
    
  ) {}
  ngOnInit(): void {

    this.notificationservice.listen();
  }
}
