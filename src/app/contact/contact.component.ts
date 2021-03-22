import { FormBuilder,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {


  constructor(private fb:FormBuilder){
  }

  contactForm=this.fb.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    zip:['',Validators.required],
    domain:['',Validators.required],
    terms:[false,Validators.required]
  });

  show(){
    console.log(this.contactForm.status);

    console.log(this.contactForm.value);
    console.log(this.contactForm.get('terms')?.value);
    if(this.contactForm.status=="VALID")
    {
      alert("We will contact you soon.")
      this.contactForm.reset();

    }



  }  ngOnInit(): void {
  }

}
