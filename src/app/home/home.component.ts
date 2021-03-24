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

  ngOnInit(): void {
  }

}
