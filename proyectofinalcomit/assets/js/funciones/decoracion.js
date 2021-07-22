import requestsToApi from './request.js'
import { recorrerArray } from './cards.js'
import { observer } from './renderLoginNav.js'

const navIcon = document.getElementById("navIcon");
const contentCardsDecoracion = document.querySelector("#contentCardsDecoracion");
const navIniciarSesion = document.getElementById("navIniciarSesion");

observer(navIcon, navIniciarSesion);

requestsToApi("http://localhost:3500/api/productos/pinturaCountry/decoracion")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCardsDecoracion))
    .catch(error => console.log(error));