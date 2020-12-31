import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinatorRoutingModule } from './coordinator.routing';
import { CoordinatorComponent } from './coordinator/coordinator.component';



@NgModule({
  declarations: [CoordinatorComponent],
  imports: [
    CommonModule,CoordinatorRoutingModule
  ]
})
export class CoordinatorModule { }
