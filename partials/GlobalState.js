export class GlobalState {
   constructor(questions){
      this.max_points = questions.reduce((acc, curr)=>acc + curr.point,0)
      this.wrong_answers = 0
      this.correct_answers = 0
      this.points = 0
      this.category_selected = false
   }
   setVisibleContainer(){
      const categories = document.querySelector('.categories')
      const questions = document.querySelectorAll('.question')
      questions.forEach(question =>{
         if(!question.classList.contains('hidden')){
            question.classList.add('hidden')
         }
      })
      if(!categories.classList.contains('hidden')){
         categories.classList.add('hidden')
      }
      
      if(this.category_selected){
         this.category_selected.showQuestion()
      }else{
         categories.classList.remove('hidden')
      }
   }
}