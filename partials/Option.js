export class Option{
   constructor(
      option, 
      container, 
      index, 
      answer,
      updateScore,
      global_state
   ){
      this.container = container
      this.index = index
      this.answer = answer
      this.updateScore = updateScore
      this.option = document.createElement('div')
      this.option.classList.add('option')
      this.option.textContent = option
      this.createOption()
      this.clicked = false
      this.global_state = global_state
   }
   createOption(){
      this.container.insertAdjacentElement('beforeend', this.option)
      this.option.addEventListener('click', this.handleClick.bind(this))
   }
   handleClick(){
      if(!this.clicked){
         const correct = this.index === this.answer
         this.clicked = true
         this.option.classList.add(correct ? 'correct' : 'incorrect')
         if(correct){
            this.global_state.category_selected.nextQuestion()
            this.global_state.setVisibleContainer()
         }
         this.updateScore()
      }
   }
}