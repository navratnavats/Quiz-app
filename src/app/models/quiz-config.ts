
export class QuizConfig {
  moveBack: boolean;
  autoMove: boolean;
  duration: number;
  pageSize: number;
  requiredAll: boolean;
  showClock: boolean;
  showPager: boolean;

  constructor(data: any) {
      data = data || {};
      this.moveBack = data.moveBack;
      this.autoMove = data.autoMove;
      this.duration = data.duration;
      this.pageSize = data.pageSize;
      this.requiredAll = data.requiredAll;
      this.showClock = data.showClock;
      this.showPager = data.showPager;
  }
}
