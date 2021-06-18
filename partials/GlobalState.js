export class GlobalState {
   constructor(questions){
      this.max_points = questions.reduce((acc, curr)=>acc + curr.point,0)
      this.wrong_answers = 0
      this.correct_answers = 0
      this.points = 0
   }
}