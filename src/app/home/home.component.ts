import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import EventEmitter from 'node:events';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() output=new EventEmitter<string>();
  constructor() { }

  quiz(quizname:string)
  {
    // console.log("from home output"+this.output.emit(quizname));

    this.output.emit(quizname);
  }

  ngOnInit(): void {
  }

}
