export class CategoryContainer{
   constructor({type, questions}){
      this.type = type
      this.questions = questions
      this.main_container = document.body.querySelector('.content')
      this.template = document.body.querySelector('#question-template')
      this.question = this.template.content.querySelector('.question')
      this.answer_container = this.question
         .querySelector('.answer-container')
         .cloneNode(true)
      this.question.id = type
      this.init()
   }
   createAnswer(content){
      const option = document.createElement('div')
      option.classList.add('answer')
      option.textContent = content
      return option
   }
   createQuestions(){
      console.log(this.questions)
      this.questions.forEach(q=>{
         this.question.querySelector('h3').textContent = q.question
         q.options.forEach(a =>{
            const answer = this.createAnswer(a)
            this.answer_container.insertAdjacentElement('beforeend', answer)
         })
         console.log(this.question)
      })
   }

   init(){
      this.createQuestions()
   }
}