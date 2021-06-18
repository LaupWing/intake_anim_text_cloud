import {Questions} from './partials/Questions.js'
import {GlobalState} from './partials/GlobalState.js'

fetch('./questions.json')
   .then(res=>res.json())
   .then(data=>{
      const global_state = new GlobalState(data)
      const questions = new Questions(data)
      const selectCategorie = (e)=>{
         const categorie = e.target.textContent.trim().toLowerCase()
         questions.categorie = categorie
      }
      const categories = document.body.querySelectorAll('.cloud .content button')
      categories.forEach(ctg=>ctg.addEventListener('click', selectCategorie))
   })