import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfolistComponent } from './informationrequest/infolist/infolist.component';
import { GlobalNotificationService } from './global.services/global.notification.service'
import { HttpMethod, NG_ENTITY_SERVICE_CONFIG, NgEntityServiceGlobalConfig } from '@datorama/akita-ng-entity-service';

import { ToastComponent } from './toast/toast.component';
@Injectable()
export class WindowWrapper extends Window {

}

export function getWindow() { return window; }



@NgModule({
  declarations: [
    AppComponent,
    InfolistComponent,
  
    ToastComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    environment.production ? [] : AkitaNgDevtools.forRoot(),

  ],
  providers: [
    {provide: WindowWrapper, useFactory: getWindow} ,
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: {
        baseUrl: 'http://localhost:3000'
      }
    },
    GlobalNotificationService
    
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
