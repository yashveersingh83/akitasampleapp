import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Milestone } from '../state/milestone.model';
import { MilestoneQuery } from '../state/milestone.query';
import { MilestoneService } from '../state/milestone.service';
import { WindowRef } from '../windowref';


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
  @ViewChild('myModal', { static: false }) myModal:any;
  
  constructor(private query: MilestoneQuery,
     private route: ActivatedRoute , private router: Router,
    private service:MilestoneService ,private window: WindowRef
    ) { 


    
    }

    ngOnInit(): void {
      this.service.get().subscribe();
     
      this.milestonelist$ = this.query.selectAll();
      this.isLoading$ = this.query.selectLoading();
  
      this.myMileStoneForm = new FormGroup({
        Date: new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
        Desc: new FormControl(null),
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
   addmilestone(event:any)
   {
     console.log(this.myMileStoneForm);
     
     this.service.add( this.myMileStoneForm.value ).subscribe();  
     ///this.router.navigate(['inf'], { relativeTo: this.route });
   }
   edit()
   {
     console.log(this.myMileStoneForm);
     
     //this.service.update( this.myMileStoneForm.value );  
   }

}
