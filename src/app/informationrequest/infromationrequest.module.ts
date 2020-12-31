import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfolistComponent } from './infolist/infolist.component';
import { InformationRequestRoutingModule } from './informationrequest.routing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddeditinforequestComponent } from './addeditinforequest/addeditinforequest.component';



@NgModule({
  declarations: [AddeditinforequestComponent],
  imports: [
    CommonModule,InformationRequestRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers:[]
})
export class InfromationrequestModule { }
