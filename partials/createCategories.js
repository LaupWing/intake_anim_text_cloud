import { getUniqueTypes } from "./utils/getUniqueTypes.js"

export function createCategories(array){
   const container = document.querySelector('.content .categories')
   getUniqueTypes(array).forEach(c =>{
      const btn = document.createElement('button')
      btn.textContent = c
      container.insertAdjacentElement('beforeend', btn)
   })
}