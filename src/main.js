import data from "./imagens/ghibli/ghibli.js"

import { getPeople, buscarName, ordemAlfabetica,  calcAgregado } from './data.js';


const films = data.films
const people = getPeople(films)



const listaImpressa = document.getElementById("listaImpressa")
const showFilme = (filmList) => {
  listaImpressa.innerHTML = "";
  filmList.forEach(film => {
    listaImpressa.innerHTML +=


            `  
    <li class="cardGhibli"> 
    <div class="cards">
    <div class="flip">
    <section class="front-card">
    <img class="card-poster" src=" ${film.poster}">
    </section>
    <section class="back-card">
    <p class="card-titulo"> ${film.title} </p> 
    <p class="card-lançamento"> Release date: ${film.release_date} </p>
    <p class="card-descrição"> Description: ${film.description} </p>    
    <p class="card-diretor"> Director: ${film.director} </p>
    <p class="card-producer"> Producer: ${film.producer} </p>
    <p class="card-avaliação"> Score: ${film.rt_score} </p>
    </section>
    </div>
    </div>
   </li>
  `
  })
}
showFilme(films)




const listaPersonagem = document.getElementById("listaPersonagem")
const showPeople = (peopleList) => {
  let cardString = ""
  peopleList.forEach(people => {
    cardString +=
            `
    <li class="cardPersonagem">
    <div class="cardsPersonagens">
    <div class="flipPersonagens"> 
    <section class="front-personagens">
          <img class="card-poster" src=" ${people.img}">
          </section>
          <section class="back-personagens">
          <p class="card-personagens">${people.name}</p>
          <p class="card-filme"> Filme: ${people.movie} </p>
          <p class="card-gênero"> Genero: ${people.gender}</p>
          <p class="card-idade"> Idade: ${people.age}</p>
          <p class="card-specie"> Espécie: ${people.specie}</p>
          </section>
          </div>
          </div>
         
    </li> 
  `
  })
  listaPersonagem.innerHTML = cardString
}
showPeople(people)



const buscarNomes = document.getElementById("search");
function filtroPesquisa(event) {
  const charactersByName = buscarName(data.films, event.target.value);
  showFilme(charactersByName);
}
buscarNomes.addEventListener("keyup", filtroPesquisa);




const ordenar = document.querySelector(".order");
function ordemFilme(event) {
  const order = ordemAlfabetica(data.films, event.target.value)
  showFilme(order);
}
ordenar.addEventListener("change", ordemFilme);




//início cálc agregado
const printCuriosidade = document.getElementById("curiosidades_id")
window.addEventListener("load", function (event) {

  const personagens = []
  for (let i = 0; i < films.length; i++) {
    personagens.push(films[i].people.length)
  }
  const curiosidades = calcAgregado(personagens, event.target.value)
  const mediaPersonagens = curiosidades.media
  const totalPersonagens = curiosidades.total

  printCuriosidade.innerHTML =
        `<div class="curiosidades">
  <h4>Curiosidades</h4>
  
  <p class="soma">A soma de todos os personagens é: ${totalPersonagens}</p>
  
  <p class="media"> A média de personagens por filme é: ${mediaPersonagens}</p>
  </div>`
});



const btn = document.querySelector("#back-to-top");

btn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});