import requestsToApi from './request.js'
import { clickCrearCuenta, clickInitGoogle } from '../auth/firebase.js'

const selectProvincias = document.getElementById("selectProvincias");
const btnCrearCuentaModal = document.getElementById("btnCrearCuentaModal");
const dataListMunicipios = document.getElementById("dataListMunicipios");
const btnInit = document.getElementById("btnInit");

const modalAlers = document.getElementById("modalAlers");

//nodos de login
const emailLongin = document.getElementById("emailLongin");
const passwordLogin = document.getElementById("passwordLogin");

//nodo de login con google
const btnInitGoogle = document.getElementById("btnInitGoogle");

//nodos de register
const btnCrearCuenta = document.getElementById("btnCrearCuenta");
const emailRegistroUno = document.getElementById("emailRegistroUno");
const emailRegistroDos = document.getElementById("emailRegistroDos");
const passRegistroUno = document.getElementById("passRegistroUno");
const passRegistroDos = document.getElementById("passRegistroDos");

const renderizarListaProvincias = (node, { nombre, id }) => {
    node.innerHTML += `<option value="${id}-${nombre}">${nombre}</option>`
}

const renderDataListMunicipio = (element, i) => {
    i === 0 ? dataListMunicipios.innerHTML = `<label for="name" class="form-label">Municipio</label><input class="municipio" list="dataListaMunicipios" name="municipio"><datalist id="dataListaMunicipios">
        <option value="${element.nombre}">${element.nombre}</option>
        </datalist>` : dataListMunicipios.lastChild.innerHTML += `<option value="${element.nombre}">${element.nombre}</option>`
}

const mostrarLocalidades = ({ value }) => {
    let provincia = ["78", "86", "02", "30"];
    let [idProvincia, ] = value.split('-');
    return requestsToApi(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${idProvincia}&campos=id,nombre&max=200`)
        .then(JSON.parse)
        .then(object => provincia.includes(idProvincia) ? dataListMunicipios.innerHTML = `<label for="name" class="form-label">Municipio</label><input type="text" id="municipio" class="municipio">` : object.municipios.forEach(renderDataListMunicipio))
        .catch(error => console.log(error));
}

const cargarProvincias = () => {
    requestsToApi("https://apis.datos.gob.ar/georef/api/provincias")
        .then(JSON.parse)
        .then(({ provincias }) => provincias.forEach(elemento => renderizarListaProvincias(selectProvincias, elemento)))
        .then(selectProvincias.addEventListener("change", () => mostrarLocalidades(selectProvincias)))
        .catch(error => console.log(error));
}

btnCrearCuentaModal.addEventListener("click", cargarProvincias);

const compararDatos = (dato1, dato2) => dato1 === dato2 ? true : false;

let mailUno = emailRegistroUno.value;
let mailDos = emailRegistroDos.value;

let passUno = passRegistroUno.value;
let passDos = passRegistroDos.value;

if (compararDatos(mailUno, mailDos)) {
    if (compararDatos(passUno, passDos)) {
        firebase.auth().createUserWithEmailAndPassword(mailUno, passUno)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                alert("usuario Creado");
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    } else {
        modalAlers.innerHTML = `<p>Las contraseñas no son iguales</p>`
    }
} else {
    modalAlers.innerHTML = `<p>Los mail no son iguales</p>`
}

//Iniciar sesion usuario con mail
const clickInicarSesion = () => {
    let email = emailLongin.value;
    let password = passwordLogin.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;

            window.location.href = "/index.html";
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

btnInit.addEventListener("click", clickInicarSesion);
btnCrearCuenta.addEventListener("click", clickCrearCuenta);
btnInitGoogle.addEventListener("click", clickInitGoogle)