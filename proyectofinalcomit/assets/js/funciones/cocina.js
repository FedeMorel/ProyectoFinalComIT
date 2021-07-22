import requestsToApi from './request.js'
import { recorrerArray } from './cards.js'
import { observer } from './renderLoginNav.js'

const navIcon = document.getElementById("navIcon");
const contentCardsCocina = document.querySelector("#contentCardsCocina");
const navIniciarSesion = document.getElementById("navIniciarSesion");
const btnPaneras = document.getElementById("btnPaneras");
const btnHueveras = document.getElementById("btnHueveras");
const btnEspecieros = document.getElementById("btnEspecieros");
const btnCajones = document.getElementById("btnCajones");
const btnCaja = document.getElementById("btnCaja");
const btnPortaRollos = document.getElementById("btnPortaRollos");
const btnPortaUtensilios = document.getElementById("btnPortaUtensilios");
const btnPortaBolsas = document.getElementById("btnPortaBolsas");
const btnVarios = document.getElementById("btnVarios");

observer(navIcon, navIniciarSesion);

requestsToApi("http://localhost:3500/api/productos/pinturaCountry/cocina")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCardsCocina))
    .catch(error => console.log(error));


btnPaneras.addEventListener("click", () => {
    aplicarFiltro("Panera");
});

btnHueveras.addEventListener("click", () => {
    aplicarFiltro("Huevera");
});

btnEspecieros.addEventListener("click", () => {
    aplicarFiltro("Especiero");
});

btnCajones.addEventListener("click", () => {
    aplicarFiltro("Cajones");
});

btnCaja.addEventListener("click", () => {
    aplicarFiltro("Caja%20de%20té");
});

btnPortaRollos.addEventListener("click", () => {
    aplicarFiltro("Porta%20rollo");
});

btnPortaUtensilios.addEventListener("click", () => {
    aplicarFiltro("Porta%20utensilios");
});

btnPortaBolsas.addEventListener("click", () => {
    aplicarFiltro("Porta%20bolsas");
});

btnVarios.addEventListener("click", () => {
    aplicarFiltro("Varios");
});

const aplicarFiltro = (tematica) => {
    requestsToApi(`http://localhost:3500/api/productos/pinturaCountry/cocina?tematica=${tematica}`)
        .then(JSON.parse)
        .then(objeto => recorrerArray(objeto, contentCardsCocina))
        .catch(error => console.log(error));
}