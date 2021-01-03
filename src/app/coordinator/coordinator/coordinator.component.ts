import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Milestone } from 'src/app/milestones/state/milestone.model';
import { Coordinator } from '../state/coordinator.model';
import { CoordinatorQuery } from '../state/coordinator.query';
import { CoordinatorService } from '../state/coordinator.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {
  mycoordinatorForm:FormGroup;  
  isLoading$: Observable<boolean>;
coordinatorList$: Observable<Coordinator[]>;
  constructor(private route: ActivatedRoute , private router: Router,
    private service:CoordinatorService,private query: CoordinatorQuery ) { }

  
    ngOnInit(): void {
      this.service.get().subscribe();
      this.coordinatorList$ = this.query.selectAll();
      this.isLoading$ = this.query.selectLoading();
  
      this.mycoordinatorForm = new FormGroup({
       
        Name: new FormControl(null),
        id: new FormControl(null),
      });
    }


    delete(id: number) {
      this.service.delete(id).subscribe();  
     }
     selectedTab(routeName:string,id: number) {
      
       console.log(id);
       this.router.navigate([routeName],{relativeTo: this.route});
     }
     addcoordinator(event:any)
     {
       console.log(this.mycoordinatorForm);
       
       this.service.add( this.mycoordinatorForm.value ).subscribe();  
      
     }
     edit()
     {
       console.log(this.mycoordinatorForm);
       
     }

}
