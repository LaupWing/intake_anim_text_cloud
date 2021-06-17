export default class Questions{
   constructor(questions){
      this.header = document.body.querySelector('.cloud header')
      this.questions = questions
      this.categorie = null
      this.init()
   }
   set categorie(value){
      console.log(value)
      const questions = this.questions.filter(question=>question.type === value)
      console.log(questions)
   }
   init(){
      console.log(this.header)
   }
}