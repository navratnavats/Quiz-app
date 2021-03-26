export class Option {
  id: number=0;
  questionId: number=0;
  name: string="";
  isAnswer: boolean=false;
  selected?: boolean=false;

  constructor(data: any) {
      data = data || {};
      this.id = data.id;
      this.questionId = data.questionId;
      this.name = data.name;
      this.isAnswer = data.isAnswer;
  }
}
