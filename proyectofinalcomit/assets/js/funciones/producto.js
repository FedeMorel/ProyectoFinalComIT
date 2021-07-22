import { observer } from './renderLoginNav.js'
import requestsToApi from './request.js';
import request from './reqMetodos.js';

const path = window.location.search;
const [, info] = path.split('=');
const [subcategoria, id] = info.split('-');
const navIcon = document.getElementById("navIcon");
const navIniciarSesion = document.getElementById("navIniciarSesion");
const uid = localStorage.getItem('uid');

//nodos
const img = document.getElementById("img");
const containetInfo = document.getElementById("containetInfo");
const otherImg = document.getElementById("otherImg");

observer(navIcon, navIniciarSesion);

const addEvent = () => {
    otherImg.childNodes.forEach(element => element.addEventListener("click", () => {
        let nuevaImagen = element.src;
        img.innerHTML = `<img class="img" src="${nuevaImagen}"></img>`
    }))
    let addCart = document.getElementById("addCart");
    addCart.addEventListener("click", AgregarAlCarrito);
}

if (subcategoria === "%C3%81lbum" || subcategoria === "Fotofolio") {
    requestsToApi(`http://localhost:3500/api/productos/scrapbooking/${id}`)
        .then(JSON.parse)
        .then(producto => renderProducto(producto))
        .then(addEvent)
        .catch(error => console.log(error));
} else {
    requestsToApi(`http://localhost:3500/api/productos/${id}`)
        .then(JSON.parse)
        .then(producto => renderProductoTwo(producto))
        .then(addEvent)
        .catch(error => console.log(error))
}

const renderProducto = ({ imagen_principal, imagenes, nombre, precio, categoria, subcategoria, tematica, size, size_photo }) => {
    img.innerHTML = `<img class="img" src="${imagen_principal}"></img>`
    otherImg.innerHTML = `<img class="other__img" src="${imagen_principal}">`
    containetInfo.innerHTML = `<p class="titulo">${nombre}</p>
    <p class="precio">$${precio}</p>
    
    <div class="info">
        <p class="subtitulo_info"><strong>Categoría:</strong>${categoria}</p>
        <p class="subtitulo_info"><strong>Subcategoría:</strong> ${subcategoria}</p>
        <p class="subtitulo_info"><strong>Temática:</strong> ${tematica}</p>
        <p class="subtitulo_info"><strong>Medidas del álbum:</strong> ${size}</p>
        <p class="subtitulo_info"><strong>Medidas de las fotos:</strong> ${size_photo}</p>
    </div>
    <div class="buttons">
        <button type="button" class="btn btn__favoritos"><i class="fas fa-star"></i></i></button>
        <button type="button" class="btn btn__cart" id="addCart"><i class="fas fa-cart-plus"></i></button>
    </div>
    <div id="notificacion" class="notificacion"></div>`

    imagenes.forEach(imgen => {
        otherImg.innerHTML += `<img class="other__img" src="${imgen}">`
    });
}

const renderProductoTwo = ({ imagen_principal, imagenes, nombre, precio, categoria, subcategoria, tematica, size, descripcion }) => {
    img.innerHTML = `<img class="img" src="${imagen_principal}"></img>`
    otherImg.innerHTML = `<img class="other__img" src="${imagen_principal}">`
    containetInfo.innerHTML = `<p class="titulo">${nombre}</p>
    <p class="precio">$${precio}</p>
    
    <div class="info">
        <p class="subtitulo_info"><strong>Categoría:</strong>${categoria}</p>
        <p class="subtitulo_info"><strong>Subcategoría:</strong> ${subcategoria}</p>
        <p class="subtitulo_info"><strong>Temática:</strong> ${tematica}</p>
        <p class="subtitulo_info"><strong>Medidas:</strong> ${size}</p>
        <p class="subtitulo_info"><strong>Descripción:</strong> ${descripcion}</p>
    </div>
    <div class="buttons">
        <button type="button" class="btn btn__favoritos"><i class="fas fa-star"></i></i></button>
        <button type="button" class="btn btn__cart" id="addCart"><i class="fas fa-cart-plus"></i></button>
    </div>
    <div id="notificacion" class="notificacion"></div>`

    imagenes.forEach(imgen => {
        otherImg.innerHTML += `<img class="other__img" src="${imgen}">`
    });
}

const comprobarProducto = () => {
    requestsToApi(`http://localhost:3500/api/clientes/noPopulate/${uid}`)
        .then(JSON.parse)
        .then(({ carrito }) => {
            if (carrito.length != 0) {
                let pro = carrito.includes(id);
                pro ?
                    mensajeYaExiste() : agregado();
            } else {
                AgregarAlCarrito();
            }
        })
}

const mensajeYaExiste = () => {
    const notificacion = document.getElementById("notificacion");
    notificacion.innerHTML = `<div class="mesajeYaExiste"><p class="mesaje_text">Ya tiene este producto en el carrito</p></div>`
    setTimeout(() => notificacion.innerHTML = "", 3000)
}

const mensajeInicarSesion = () => {
    const notificacion = document.getElementById("notificacion");
    notificacion.innerHTML = `<div class="mesajeErr"><p class="mesaje_text">Debe iniciar sesión para agregar al carrito</p></div>`
    setTimeout(() => notificacion.innerHTML = "", 3000)
}

const mesajeSeAgrego = () => {
    notificacion.innerHTML = `<div class="mesaje"><p class="mesaje_text">Se agragró al carrito</p></div>`
    setTimeout(() => notificacion.innerHTML = "", 3000)
}

const agregado = () => {
    const data = `{"carrito": "${id}"}`
    request(data, "PUT", `http://localhost:3500/api/clientes/agregarAlCarrito/${uid}`)
        .catch(err => console.log(err))
    mesajeSeAgrego()
}

const AgregarAlCarrito = () => {
    if (uid) {
        comprobarProducto();
    } else {
        mensajeInicarSesion();
    }
}