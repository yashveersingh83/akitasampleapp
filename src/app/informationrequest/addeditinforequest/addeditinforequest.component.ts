import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InforequestService } from '../state/inforequest.service';
import { InforequestStore } from '../state/inforequest.store';

@Component({
  selector: 'app-addeditinforequest',
  templateUrl: './addeditinforequest.component.html',
  styleUrls: ['./addeditinforequest.component.css']
})
export class AddeditinforequestComponent implements OnInit {
  myForm: FormGroup;
  isEdit: boolean;
  constructor(private service: InforequestService, private store: InforequestStore) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      'title': new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
      'type': new FormControl(null),
      'id': new FormControl(null)
    });
 
  }


  save(){

    this.store.add( this.myForm.value );  

  }

}
