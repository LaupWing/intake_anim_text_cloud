import { CategoryContainer } from "./CategoryContainer.js"
import { getUniqueTypes } from "./utils/getUniqueTypes.js"


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
   typesAndQuestion(array){
      return getUniqueTypes(array)
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
         .map(type => new CategoryContainer(type))
   }
}