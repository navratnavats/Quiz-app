import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-formtesting',
  templateUrl: './formtesting.component.html',
  styleUrls: ['./formtesting.component.css']
})
export class FormtestingComponent implements OnInit {

  contatcform=this.fb.group({
    fname:['',Validators.required],
    lname:[''],
    age:[''],
    city:[''],
    state:[''],
    zip:[''],
    domain:['']
  });
  constructor(private fb:FormBuilder) { }

  Submit(){
    console.log(this.contatcform.value);

  }
  ngOnInit(): void {
  }

}
