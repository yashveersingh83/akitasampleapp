import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneComponent } from './milestone/milestone.component';
import { MileStoneRoutingModule } from './milestone.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';
import { WindowRef } from './windowref';


@Injectable()
export class WindowWrapper extends Window {

}

export function getWindow() { return window; }

@NgModule({
  declarations: [MilestoneComponent],
  imports: [
    CommonModule,MileStoneRoutingModule,ReactiveFormsModule,FormsModule,DevExtremeModule,DxDataGridModule
  ],
  providers: [ WindowRef],

})
export class MilestoneModule { }

