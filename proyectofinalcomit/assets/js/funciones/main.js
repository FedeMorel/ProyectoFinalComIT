import { observer } from './renderLoginNav.js'
import requestsToApi from './request.js'
import { renderizarCards } from './cards.js'

const contentPhotofolio = document.querySelector("#contentPhotofolio");
const contentAlbum = document.querySelector("#contentAlbum");
const contentfarmhouse = document.querySelector("#contentfarmhouse");
const contentCountry = document.querySelector("#contentCountry");
const navIcon = document.getElementById("navIcon");
const navIniciarSesion = document.getElementById("navIniciarSesion");

observer(navIcon, navIniciarSesion);

const recorrerArray = ({ resultados }, nodo) => {
    resultados.forEach(elemento => renderizarCards(nodo, elemento))
}

requestsToApi("http://localhost:3500/api/productos/tarjetas")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentPhotofolio))
    .catch(error => console.log(error));

requestsToApi("http://localhost:3500/api/productos/scrapbooking?subcategoria=Álbum")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentAlbum))
    .catch(error => console.log(error));

requestsToApi("http://localhost:3500/api/productos/scrapbooking?subcategoria=Fotofolio")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentAlbum))
    .catch(error => console.log(error));

requestsToApi("http://localhost:3500/api/productos/farmhouse")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentfarmhouse))
    .catch(error => console.log(error));

requestsToApi("http://localhost:3500/api/productos/pinturaCountry")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCountry))
    .catch(error => console.log(error));