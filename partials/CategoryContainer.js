export class CategoryContainer{
   constructor({type, questions}){
      this.type = type
      this.questions = questions
      this.main_container = document.body.querySelector('.content')
      this.template = document.body.querySelector('#question-template')
      this.question = this.template.content.querySelector('.question')
      this.category_container = document.createElement('div')
      this.category_container.classList.add('category')
      this.question.dataset.category = type
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
         const question = this.question.cloneNode(true)
         const answer_container = question.querySelector('.answer-container')
         question.querySelector('h3').textContent = q.question
         q.options.forEach(a =>{
            const answer = this.createAnswer(a)
            answer_container.insertAdjacentElement('beforeend', answer)
         })
         this.category_container.insertAdjacentElement('beforeend', question)
      })
      console.log(this.category_container)
   }

   init(){
      this.createQuestions()
   }
}