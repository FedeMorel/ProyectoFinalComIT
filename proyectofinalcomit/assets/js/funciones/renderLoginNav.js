import { cerarSesion } from '../auth/firebase.js';
import requestsToApi from './request.js'

export const observer = (nodoOne, nodoTwo) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            let uid = user.uid;
            let img = user.photoURL
            requestsToApi(`http://localhost:3500/api/clientes/${uid}`)
                .then(localStorage.setItem('uid', uid))
            renderLoginOptions(nodoOne, nodoTwo, img);
        } else {
            renderLoginOutOptions(nodoOne, nodoTwo);
        }
    });
}

const logOut = (nodeOne, nodeTwo) => {
    nodeOne.addEventListener("click", cerarSesion);
    nodeTwo.addEventListener("click", cerarSesion);
}

const evetDrop = (nodeOne, nodeTwo) => {
    nodeOne.addEventListener("click", (e) => {
        if (e.target) {
            nodeTwo.classList.toggle("witdhDrop");
        }
    })
}

const renderLoginOptions = (nodoOne, nodoTwo, img) => {
    nodoOne.href = ""
    nodoOne.innerHTML = `<div class="dropdownLogIn" id="personIcon">
        <img class="img__user" src="${img}">
        <div class="drop__container" id="dropContainer">
            <li class="drop__item"><a class="drop__item">Perfil</a></li>
            <li  class="drop__item"><a class="drop__item" id="btnLogOut">Cerrar sesión</a></li>
        </div>
        </div>
    <a href="/carrito.html" data-bs-toggle="tooltip" data-bs-placement="button" title="Carrito"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#fff" class="bi bi-cart3 icon__card " viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg></a>`
    nodoTwo.innerHTML = `<a class="nav-link dropdown-toggle style__nav" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Iniciar sesión
</a>
<ul class="dropdown-menu font__dropdown" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item ">Perfil</a></li>
    <li><a id="navLonOut" class="dropdown-item ">Cerrar Sesión</a></li>
</ul>`;
    const navLonOut = document.getElementById("navLonOut");
    const btnLogOut = document.getElementById("btnLogOut");
    evetDrop(personIcon, dropContainer);
    logOut(navLonOut, btnLogOut);
}

const renderLoginOutOptions = (nodoOne, nodoTwo) => {
    nodoOne.innerHTML = `<a href="/login.html" data-bs-toggle="tooltip" data-bs-placement="button" title="Inicar sesión"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#fff" class=" icon__person bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg></a>
        <a /carrito.html data-bs-toggle="tooltip" data-bs-placement="button" title="Carrito"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#fff" class="bi bi-cart3 icon__card " viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></a>`
    nodoTwo.innerHTML = `<a class="nav-link style__nav" href="/login.html">Inicar Sesion</a>`;
}