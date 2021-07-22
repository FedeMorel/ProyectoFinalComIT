import requestsToApi from './request.js'
import { recorrerArray } from './cards.js'
import { observer } from './renderLoginNav.js'

const navIcon = document.getElementById("navIcon");
const contentCardsSuvenirs = document.querySelector("#contentCardsSuvenirs");
const navIniciarSesion = document.getElementById("navIniciarSesion");
const btnPortaRetrato = document.getElementById("btnPortaRetrato");
const btnCajitas = document.getElementById("btnCajitas");
const btnMacetitas = document.getElementById("btnMacetitas");
const btnPortaLapices = document.getElementById("btnPortaLapices");
const btnLlaveros = document.getElementById("btnLlaveros");
const btnAlcancias = document.getElementById("btnAlcancias");
const btnImanes = document.getElementById("btnImanes");
const btnPortaFotos = document.getElementById("btnPortaFotos");
const btnGolocineros = document.getElementById("btnGolocineros");
const btnVarios = document.getElementById("btnVarios");

observer(navIcon, navIniciarSesion);

btnPortaRetrato.addEventListener("click", () => {
    aplicarFiltro("Porta%20retrato");
});

btnCajitas.addEventListener("click", () => {
    aplicarFiltro("Cajitas");
});

btnMacetitas.addEventListener("click", () => {
    aplicarFiltro("Macetitas");
});

btnPortaLapices.addEventListener("click", () => {
    aplicarFiltro("Porta%20lapices");
});

btnLlaveros.addEventListener("click", () => {
    aplicarFiltro("Llaveros");
});

btnAlcancias.addEventListener("click", () => {
    aplicarFiltro("Alcancias");
});

btnImanes.addEventListener("click", () => {
    aplicarFiltro("Imanes");
});

btnPortaFotos.addEventListener("click", () => {
    aplicarFiltro("Porta%20fotos");
});

btnGolocineros.addEventListener("click", () => {
    aplicarFiltro("Golocineros");
});

btnVarios.addEventListener("click", () => {
    aplicarFiltro("Varios");
});


const aplicarFiltro = (tematica) => {
    requestsToApi(`http://localhost:3500/api/productos/pinturaCountry/bebes?tematica=${tematica}`)
        .then(JSON.parse)
        .then(objeto => recorrerArray(objeto, contentCardsCocina))
        .catch(error => console.log(error));
}