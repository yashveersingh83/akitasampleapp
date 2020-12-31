import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { InfolistComponent } from './informationrequest/infolist/infolist.component';


@NgModule({
  declarations: [
    AppComponent,
    InfolistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,

    environment.production ? [] : AkitaNgDevtools.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
