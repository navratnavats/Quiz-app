import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mode='home'
  constructor() {
  }
  changemode(){
    this.mode='quiz'
  }

  ngOnInit(): void {


  }

}
