import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneComponent } from './milestone/milestone.component';
import { MileStoneRoutingModule } from './milestone.routing';



@NgModule({
  declarations: [MilestoneComponent],
  imports: [
    CommonModule,MileStoneRoutingModule
  ]
})
export class MilestoneModule { }
