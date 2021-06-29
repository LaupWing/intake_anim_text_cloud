import { Option } from "./Option.js"

export class Question{
   constructor(data, container){
      this.template = document.body.querySelector('#question-template')
      this.question = this.template.content.querySelector('.question')
      this.data = data
      this.container = container
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
      // this.global_state.category_selected.nextQuestion()
      // this.global_state.setVisibleContainer()
      console.log(this)
      this.controlEvents()
   }
   controlEvents(){
      console.log(this.question)
   }
   init(){
      this.createQuestions()
   }
}