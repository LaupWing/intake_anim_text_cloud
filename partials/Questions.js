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
   init(){
      console.log(this.header)
   }
}