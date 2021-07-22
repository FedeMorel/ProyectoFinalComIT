import requestsToApi from './request.js'
import { recorrerArray } from './cards.js'
import { observer } from './renderLoginNav.js'

let navIcon = document.getElementById("navIcon");
let contentCardsLetras = document.querySelector("#contentCardsLetras");
let navIniciarSesion = document.getElementById("navIniciarSesion");

observer(navIcon, navIniciarSesion);

requestsToApi("http://localhost:3500/api/productos/pinturaCountry/letras")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCardsLetras))
    .catch(error => console.log(error));