import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Inforequest } from '../state/inforequest.model';
import { InforequestQuery } from '../state/inforequest.query';
import { InforequestService } from '../state/inforequest.service';
import { FormGroup, FormControl } from '@angular/forms';
import { InforequestStore } from '../state/inforequest.store';
@Component({
  selector: 'app-infolist',
  templateUrl: './infolist.component.html',
  styleUrls: ['./infolist.component.css'],
  
})
export class InfolistComponent implements OnInit {
  myForm:FormGroup;  
  isLoading$: Observable<boolean>;
  infolist$: Observable<Inforequest[]>;
  selectedinformationReuest: number;
  isedit:boolean;
  constructor(private query: InforequestQuery,
     private route: ActivatedRoute , private router: Router,
    private service:InforequestService , private store:InforequestStore
    ) { }

  ngOnInit(): void {
    this.service.get().subscribe();
    this.infolist$ = this.query.selectAll();
    
    this.myForm = new FormGroup({          
      'title':new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
      'type':new FormControl(null),
      'id':new FormControl(null)


 })
  }

  selectedRow(id: number) {
    this.selectedinformationReuest = id;

    console.log(id);
  }

  delete(id: number) {
   this.service.remove(id);
  }
  selectedTab(routeName:string,id: number) {
   
    console.log(id);
    this.router.navigate([routeName],{relativeTo: this.route});
  }
  add()
  {
    console.log(this.myForm);
    
    this.service.add( this.myForm.value );  
  }
  edit()
  {
    console.log(this.myForm);
    
    //this.service.update( this.myForm.value );  
  }
}
