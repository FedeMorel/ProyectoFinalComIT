import requestsToApi from './request.js'
import { renderizarCards } from './cards.js'
import { observer } from './renderLoginNav.js'

const navIcon = document.getElementById("navIcon");
const navIniciarSesion = document.getElementById("navIniciarSesion");
const contentCardsScrap = document.querySelector("#contentCardsScrap");
const btnAplicar = document.querySelector("#btnAplicar");
const boxFotofolio = document.querySelector("#boxFotofolio");
const boxAlbum = document.querySelector("#boxAlbum");

observer(navIcon, navIniciarSesion);

const recorrerArray = ({ resultados }, nodo) => {
    resultados.forEach(elemento => renderizarCards(nodo, elemento))
}

requestsToApi("http://localhost:3500/api/productos/scrapbooking")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCardsScrap))
    .catch(error => console.log(error));

requestsToApi("http://localhost:3500/api/productos/tarjetas")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCardsScrap))
    .catch(error => console.log(error));

btnAplicar.addEventListener("click", () => {
    contentCardsScrap.innerHTML = " "
    verificarCheck();
})

const verificarCheck = () => {
    if (boxFotofolio.checked) {
        aplicarFiltro("Fotofolio")
    }
    if (boxAlbum.checked) {
        aplicarFiltro("Álbum");
    }
}

const aplicarFiltro = (subcategoria) => {
    requestsToApi(`http://localhost:3500/api/productos/scrapbooking?subcategoria=${subcategoria}`)
        .then(JSON.parse)
        .then(objeto => recorrerArray(objeto, contentCardsScrap))
        .catch(error => console.log(error));
}