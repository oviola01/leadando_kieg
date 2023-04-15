import {createCard, createTable} from "./creator.js";
import {addToOrder} from "./orderer.js";

let ARTICLE;
let cards;
let itemTable;

$(function() {
  ARTICLE = document.querySelector("article");
  cards = document.querySelector("section.cards");
  itemTable = document.querySelector("section.itemTable");
  
  /* GOMB.addEventListener("click", function(){gombNyomas(ARTICLE)}) */
  createCard();
  createTable();


  //delButton();
  /*const SUBMIT = document.querySelector("aside button");
  SUBMIT.addEventListener("click", addToOrder);*/
}
)

/*
function delButton() {
  const TR = document.querySelectorAll("tr");

  for (let index = 0; index < KUTYALISTA.length; index++) {
    const TD = document.createElement("td");
    const TORLES = document.createElement("button");
    TORLES.innerText = "Törlés";
    TR[index].appendChild(TD);
    TD.appendChild(TORLES);
    TORLES.addEventListener("click", function () {
      torlesFunkcio(index);
    });
  }
}

function torlesFunkcio(index) {
  KUTYALISTA.splice(index, 1);
  createTable();
  delButton();
}
*/

