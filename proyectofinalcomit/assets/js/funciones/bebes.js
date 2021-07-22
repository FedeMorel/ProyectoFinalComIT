import requestsToApi from './request.js'
import { recorrerArray } from './cards.js'
import { observer } from './renderLoginNav.js'

const navIcon = document.getElementById("navIcon");
const navIniciarSesion = document.getElementById("navIniciarSesion");
const contentCardsBebes = document.querySelector("#contentCardsBebes");
const btnNacimiento = document.querySelector("#btnNacimiento");
const btnPrimerAño = document.querySelector("#btnPrimerAño");
const btnBautismo = document.querySelector("#btnBautismo");
const btnCumpleaños = document.querySelector("#btnCumpleaños");
const btnComunión = document.querySelector("#btnComunión");
const btnPromesa = document.querySelector("#btnPromesa");
const btnEgesados = document.querySelector("#btnEgesados");
const btn15Años = document.querySelector("#btn15Años");




observer(navIcon, navIniciarSesion);

requestsToApi("http://localhost:3500/api/productos/pinturaCountry/bebes")
    .then(JSON.parse)
    .then(objeto => recorrerArray(objeto, contentCardsBebes))
    .catch(error => console.log(error));

btnNacimiento.addEventListener("click", () => {
    aplicarFiltro("Nacimento")
});

btnPrimerAño.addEventListener("click", () => {
    aplicarFiltro("Primer%20año")
});

btnBautismo.addEventListener("click", () => {
    aplicarFiltro("Bautismo")
});

btnCumpleaños.addEventListener("click", () => {
    aplicarFiltro("Cumpleaños")
});

btnComunión.addEventListener("click", () => {
    aplicarFiltro("Comunión")
})

btnPromesa.addEventListener("click", () => {
    aplicarFiltro("Promesa")
});

btnEgesados.addEventListener("click", () => {
    aplicarFiltro("Egresados")
});

btn15Años.addEventListener("click", () => {
    aplicarFiltro("15%20años")
});



const aplicarFiltro = (tematica) => {
    requestsToApi(`http://localhost:3500/api/productos/pinturaCountry/bebes?tematica=${tematica}`)
        .then(JSON.parse)
        .then(objeto => recorrerArray(objeto, contentCardsCocina))
        .catch(error => console.log(error));
}