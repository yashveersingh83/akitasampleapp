import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'infolist',
    loadChildren: () => import('./informationrequest/infromationrequest.module').then(m => m.InfromationrequestModule)
  },
  {
    path: '',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
   
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
