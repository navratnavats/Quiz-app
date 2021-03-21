import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz-app';
  @Output() output=new EventEmitter<string>();
  constructor() { }

  quiz(quizname:string)
  {
    // console.log("from home output"+this.output.emit(quizname));

    this.output.emit(quizname);
  }
}
