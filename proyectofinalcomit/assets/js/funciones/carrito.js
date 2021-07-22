import requestsToApi from './request.js'
import { observer } from './renderLoginNav.js'
import request from './reqMetodos.js';
let precioTotal = 0;
const navIcon = document.getElementById("navIcon");
const navIniciarSesion = document.getElementById("navIniciarSesion");
const uid = localStorage.getItem('uid');
const content = document.getElementById("content");
const total = document.getElementById("total");

observer(navIcon, navIniciarSesion);

const manejodeCarrito = (id) => {
    const data = `{"producto": "${id}"}`
    request(data, "DELETE", `http://localhost:3500/api/clientes/elimiarDelCarrito/${uid}`)
        .then(window.location.href = "./carrito.html")
        .catch(err => console.log(err))
}

const ElimiarProducto = (element) => {
    let id = element.target.getAttribute("id");
    requestsToApi(`http://localhost:3500/api/clientes/${uid}`)
        .then(JSON.parse)
        .then(() => manejodeCarrito(id))
        .catch(err => console.log(err))
}

const eventElimiar = () => {
    const btnEliminar = document.querySelectorAll(".elimiar__producto");
    btnEliminar.forEach(element => element.addEventListener("click", (element) => ElimiarProducto(element)))
}

const renderProductos = ({ imagen_principal, nombre, precio, id }) => {
    precioTotal += precio;
    content.innerHTML += `<div class="producto">
    <div class="content__img">
        <img class=" img__producto " src="${imagen_principal}" alt=" ">
    </div>
    <div class="nombre__content"><p class="nombre__producto">${nombre}</p></div>
    <div class="precio__content"><p class="precio__producto">$${precio}</p></div>
    <div class="cantidad">
                <button class="btnCantidad"><i class="fas fa-minus"></i></button>
                <input class="contentText" readonly="readonly" type="text" value="1">
                <button class="btnCantidad"><i class="fas fa-plus"></i></button>
            </div>
    <div id="${id}" class="elimiar__producto"><i id="${id}" class="far fa-trash-alt"></i></div>
    
</div>`

    total.innerHTML = `$${precioTotal}`
}

const renderCarrito = ({ carrito }) => {
    if (carrito.length != 0) {
        carrito.forEach(element => {
            renderProductos(element)
        });
    } else {
        content.innerHTML = `<div class="content__text"><p class="carrito__text">Tu carrito está vacío</p></div>`
    }
}

const requestCarrito = () => {
    requestsToApi(`http://localhost:3500/api/clientes/${uid}`)
        .then(JSON.parse)
        .then(objeto => renderCarrito(objeto))
        .then(eventElimiar)
        .catch(err => console.log(err))
}





requestCarrito();