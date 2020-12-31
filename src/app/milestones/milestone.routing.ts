import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MilestoneComponent } from './milestone/milestone.component';


const routes: Routes = [
 
 
  {
    path: '',
    component:MilestoneComponent
   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MileStoneRoutingModule { }
