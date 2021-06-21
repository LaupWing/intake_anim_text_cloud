export class Option{
   constructor(option, container){
      this.container = container
      this.option = document.createElement('div')
      this.option.classList.add('answer')
      this.option.textContent = option
      this.createOption()
   }
   createOption(){
      this.container.insertAdjacentElement('beforeend', this.option)
   }
}