import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class QuizService
{
  constructor(private http:HttpClient){}

  get(url:string){
    return this.http.get(url);
  }

  getAll(){
    return [
      {id:'assets/java.json',name:"Java"},
      {id:'assets/sql.json' , name:"SQL"},
      {id:'assets/python.json', name:"Python"}

    ];
  }
}
