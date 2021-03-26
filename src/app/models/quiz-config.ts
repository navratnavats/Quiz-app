
export class QuizConfig {
  moveBack: boolean;
  autoMove: boolean;
  duration: number;


  constructor(data: any) {
      data = data || {};
      this.moveBack = data.moveBack;
      this.autoMove = data.autoMove;
      this.duration = data.duration;

  }
}
