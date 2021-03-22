import { Component, OnInit } from '@angular/core';

import { QuizService } from '../services/quiz.service';
import { Option, Question, Quiz, QuizConfig } from '../models/index';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  correctans:number=0;
  disans:string[]=[];
  quizes: any[]=[];
  iscorrect:number=0;
  sum:number=0;
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string="";
  config: QuizConfig = {
    'moveBack': true,
    // 'canReview': true,
    'autoMove': false,
    'duration': 120,
    'pageSize': 1,
    'requiredAll': false,
    'showClock': false,
    'showPager': true,
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date=new Date();
  endTime: Date=new Date();
  ellapsedTime = '00:00';
  duration = '';

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

  loadQuiz(quizName: string) {
    //loading jsons
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

  // timer
  tick() {
    const now = new Date();
    // console.log("sirf now "+now);
    // console.log("get time" +now.getTime());


    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    // console.log(diff);

    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }


  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    // console.log("min= "+{mins} +"sec = "+{secs});
    // console.log(`${mins}:${secs}`);


    return `${mins}:${secs}`;
  }


  get filteredQuestions() {
    return (this.quiz.questions) ?this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {


    if (question.questionTypeId === 1) {
      question.options.forEach((x) => {
        console.log(x);


        if(x.id===option.id && option.isAnswer)
        {
            this.correctans++;
        }
         if (x.id !== option.id)
         {
           x.selected = false;
          }

        });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }

  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    let ans= question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
    return ans;

  };


  counter=0;
  displayResult(){

    this.quiz.questions.forEach(x=>
      x.options.forEach(y=>{
        if(y.isAnswer===true)
        {
          let quesid=y.id
          if(quesid==1055)
          {
            this.disans.push('a');
          }
          else if(quesid==1056)
          {
            this.disans.push('b')
          }
          else if(quesid==1057)
          {
            this.disans.push('c')
          }
          else
          {
            this.disans.push('d')
          }
        }
      }));
      // console.log(this.disans);


  }

  onDetailresult(){
    let answers = [];
    this.quiz.questions.forEach(x => answers.push(
      { 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }
      ));
      // console.log(this.quiz.questions);
      this.mode='detailresult'
  }
  onSubmit() {

    this.mode = 'result';
  }
}
