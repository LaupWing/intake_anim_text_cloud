import Questions from './partials/Questions.js'

fetch('./questions.json')
   .then(res=>res.json())
   .then(data=>{
      const questions = new Questions(data)
      const selectCategorie = (e)=>{
         const categorie = e.target.textContent.trim().toLowerCase()
         questions.categorie = categorie
      }
      const categories = document.body.querySelectorAll('.cloud .content button')
      categories.forEach(ctg=>ctg.addEventListener('click', selectCategorie))
   })