import { CategoryContainer } from "./CategoryContainer.js"


export class Questions{
   constructor(questions){
      this.header = document.body.querySelector('.cloud header')
      this.questions = questions
      this.categorie = null
      this.init()
   }
   set categorie(value){
      const questions = this.questions.filter(question=>question.type === value)
   }
   populateQuestionContainers(obj){
      new CategoryContainer(obj)
      const container = document.body.querySelector('.content')
      const template = document.body.querySelector('#question-template')
      const question = template.content.querySelector('.question')
      const answer = template.content.querySelector('.answer')
      // const question_container = document
      //    .createElement('div')
      // question_container.classList
      //    .add('question-container')
      question_container.id = obj.type
      // console.log(question)
      // console.log({
      //    container,
      //    questionContainer
      // })
   }
   typesAndQuestion(array){
      return array
         .map(x=>x.type)
         .filter((value, index, self)=> self.indexOf(value) === index)
         .map(x=>{
            const questions = array.filter(y=>y.type === x)
            return {
               type:x,
               questions
            }
         })
   }
   init(){
      this.typesAndQuestion(this.questions)
         .map(type => this.populateQuestionContainers(type))
   }
}