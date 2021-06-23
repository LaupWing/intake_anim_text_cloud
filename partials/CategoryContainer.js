import { Question } from "./Question.js"

export class CategoryContainer{
   constructor({type, questions}, global_state){
      this.type = type
      this.global_state = global_state
      this.current_question = 0
      this.questions = questions
      this.main_container = document.body.querySelector('.content')
      this.category_container = document.createElement('div')
      this.category_container.classList.add('category')
      this.category_container.dataset.category = type
      this.init()
   }
   createAnswer(content){
      const option = document.createElement('div')
      option.classList.add('answer')
      option.textContent = content
      return option
   }
   createQuestions(){
      this.questions.forEach(q=>{
         new Question(
            q, 
            this.category_container
         )
      })
      this.main_container.insertAdjacentElement('beforeend', this.category_container)
   }
   showQuestion(){
      const questions = this.category_container.querySelectorAll('.question')
      questions[this.current_question].classList.remove('hidden')
   }
   updateScore(){

   }
   nextQuestion(){
      if((this.questions.length-1) > this.current_question){
         this.current_question = this.current_question + 1
      }
   }
   init(){
      this.createQuestions()
   }
}