import requestsToApi from './request.js'
import { renderizarCards } from './cards.js'
import { observer } from './renderLoginNav.js'

const navIcon = document.getElementById("navIcon");
const contentCardsFarmhouse = document.querySelector("#contentCardsFarmhouse");
const navIniciarSesion = document.getElementById("navIniciarSesion");

observer(navIcon, navIniciarSesion);

const recorrerArray = ({ resultados }, nodo) => {
    resultados.forEach(elemento => renderizarCards(nodo, elemento))
}

requestsToApi("http://localhost:3500/api/productos/farmhouse")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCardsFarmhouse))