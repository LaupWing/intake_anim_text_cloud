export class Option{
   constructor(
      option, 
      container, 
      index, 
      data,
      correct
   ){
      this.container = container
      this.index = index
      this.data = data
      this.option = document.createElement('div')
      this.option.classList.add('option')
      this.option.textContent = option
      this.createOption()
      this.clicked = false
      this.correct = correct
   }
   createOption(){
      this.container.insertAdjacentElement('beforeend', this.option)
      this.option.addEventListener('click', this.handleClick.bind(this))
   }
   handleClick(){
      if(!this.clicked){
         const correct = this.index === this.data.answer
         this.clicked = true
         this.option.classList.add(correct ? 'correct' : 'incorrect')
         if(correct){
            this.correct(this.data.point)
         }
      }
   }
}