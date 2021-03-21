import { Component, OnInit } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  fname:string="";
  lname:string="";
  city:string="";
  state:string="";
  zip:string=""
  domain:string="";
  terms:boolean=false
  show(){
    if(this.fname=="" || this.lname=="" || this.city=="" || this.state=="" || this.zip=="" || this.domain=="")
    {
      alert("Please fill all the details")
    }
    else if(!this.terms)
    {
      alert("Please accept terms and condition")
    }
    else
    {
      console.log(this.terms);

      alert("We will contact you real soon!!")
      this.fname="";
      this.lname="";
      this.city="";
      this.state="";
      this.zip=""
      this.domain="";
    }

  }
  constructor(){
  }

  ngOnInit(): void {
  }

}
