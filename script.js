import {Questions} from './partials/Questions.js'
import {GlobalState} from './partials/GlobalState.js'
import { Categories } from './partials/Categories.js'

fetch('./questions.json')
   .then(res=>res.json())
   .then(data=>{
      const global_state = new GlobalState(data)
      const questions = new Questions(data)
      const selectCategorie = (e)=>{
         const categorie = e.target.textContent.trim().toLowerCase()
         questions.categorie = categorie
      }
      new Categories(data)
      
   })