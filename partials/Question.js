import { Option } from "./Option.js"

export class Question{
   constructor(data, container, questions, setQuestion, globalState){
      this.template = document.body.querySelector('#question-template')
      this.question = this.template.content.querySelector('.question')
      this.data = data
      this.container = container
      this.questions = questions
      this.setQuestion = setQuestion
      this.globalState = globalState
      this.init()
   }
   createQuestions(){
      this.question = this.question.cloneNode(true)
      this.options_container = this.question.querySelector('.options-container')
      this.question.querySelector('h3').textContent = this.data.question
      this.data.options.forEach((o, i) => 
         new Option(
            o, 
            this.options_container,
            i,
            this.data.answer,
            this.correct.bind(this)
         )
      )
      this.container.insertAdjacentElement('beforeend', this.question)
   }
   correct(){
      this.controlEvents()
   }
   controlEvents(){
      if(this.questions.indexOf(this.data) + 1 !== this.questions.length){
         this.question.querySelector('.next').classList.remove('disabled')
      }
   }
   init(){
      this.createQuestions()
      if(this.questions.indexOf(this.data) > 0){
         this.question.querySelector('.prev').classList.remove('disabled')
      }
      this.question.querySelector('.progress').textContent = `${this.questions.indexOf(this.data)+1} / ${this.questions.length}`
      this.question.querySelector('.next').addEventListener('click',()=> 
         this.setQuestion(true)
      )
      this.question.querySelector('.prev').addEventListener('click',()=> 
         this.setQuestion(false)
      )
   }
}