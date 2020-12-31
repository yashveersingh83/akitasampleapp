import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfolistComponent } from './infolist/infolist.component';
import { InformationRequestRoutingModule } from './informationrequest.routing';
import { InformationrequestService } from './informationrequest.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddeditinforequestComponent } from './addeditinforequest/addeditinforequest.component';



@NgModule({
  declarations: [AddeditinforequestComponent],
  imports: [
    CommonModule,InformationRequestRoutingModule,ReactiveFormsModule,FormsModule
  ],
  providers:[InformationrequestService]
})
export class InfromationrequestModule { }
