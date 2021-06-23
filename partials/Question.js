import { Option } from "./Option"

export class Question{
   constructor(question){
      this.question = question.cloneNode(true)
      this.options_container = question.querySelector('.options-container')
      question.querySelector('h3').textContent = q.question
      q.options.forEach((o, i) => 
         new Option(
            o, 
            this.options_container,
            i,
            q.answer,
            this.updateScore,
            this.global_state
         )
      )
   }
}