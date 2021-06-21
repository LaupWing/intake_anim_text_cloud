import { getUniqueTypes } from "./utils/getUniqueTypes.js"

export class Categories{
   constructor(data){
      this.container = document.querySelector('.content .categories')
      this.data = data
      this.createButtons(this.data)
   }
   createButtons(array){
      getUniqueTypes(array).forEach(c =>{
         const btn = document.createElement('button')
         btn.textContent = c
         this.container.insertAdjacentElement('beforeend', btn)
         btn.addEventListener('click', this.handleClick)
      })
   }
   handleClick(){
      console.log(this.textContent.trim().toLowerCase())
   }
}