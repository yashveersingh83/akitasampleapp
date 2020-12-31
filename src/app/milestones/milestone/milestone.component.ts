import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Milestone } from '../state/milestone.model';
import { MilestoneQuery } from '../state/milestone.query';
import { MilestoneService } from '../state/milestone.service';
import { MilestoneStore } from '../state/milestone.store';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent implements OnInit {

  myMileStoneForm:FormGroup;  
  isLoading$: Observable<boolean>;
  milestonelist$: Observable<Milestone[]>;
  selectedinformationReuest: number;

  constructor(private query: MilestoneQuery,
     private route: ActivatedRoute , private router: Router,
    private service:MilestoneService 
    ) { }

    ngOnInit(): void {
      this.service.get().subscribe();
      this.milestonelist$ = this.query.selectAll();
      this.isLoading$ = this.query.selectLoading();
  
      this.myMileStoneForm = new FormGroup({
        date: new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
        desc: new FormControl(null),
        id: new FormControl(null),
      });
    }
  

  delete(id: number) {
    this.service.remove(id);
   }
   selectedTab(routeName:string,id: number) {
    
     console.log(id);
     this.router.navigate([routeName],{relativeTo: this.route});
   }
   addmilestone(event:any)
   {
     console.log(this.myMileStoneForm);
     
     this.service.add( this.myMileStoneForm.value );  
   }
   edit()
   {
     console.log(this.myMileStoneForm);
     
     //this.service.update( this.myMileStoneForm.value );  
   }

}
