import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneComponent } from './milestone/milestone.component';
import { MileStoneRoutingModule } from './milestone.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MilestoneComponent],
  imports: [
    CommonModule,MileStoneRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class MilestoneModule { }
