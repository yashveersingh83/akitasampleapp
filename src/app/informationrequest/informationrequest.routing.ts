import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfolistComponent } from './infolist/infolist.component';


const routes: Routes = [
  {
    path: '',
    component:InfolistComponent,
    children:[
 

      {
        path: 'milestone',
        loadChildren: () => import('../milestones/milestone.module').then(m => m.MilestoneModule)
       
      },
      {
        path: 'coordinator',
        loadChildren: () => import('../coordinator/coordinator.module').then(m => m.CoordinatorModule)
       
      },
    ]
  
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRequestRoutingModule { }
