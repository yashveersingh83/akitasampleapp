import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinatorRoutingModule } from './coordinator.routing';
import { CoordinatorComponent } from './coordinator/coordinator.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevExtremeModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [CoordinatorComponent],
  imports: [
    CommonModule,CoordinatorRoutingModule,FormsModule,DevExtremeModule,DxDataGridModule,ReactiveFormsModule
  ],
  providers:[

    
  ]
})
export class CoordinatorModule { }
