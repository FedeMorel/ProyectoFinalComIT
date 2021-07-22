const { Router } = require('express');
const { obtenerColeccion, obtenerUnaColeccion, eliminarColeccion, almacenarColeccion } = require('../controllers/papeles.controllers');
const routerColecciones = Router();


routerColecciones.get('/', obtenerColeccion);

routerColecciones.get('/:id', obtenerUnaColeccion);

routerColecciones.delete('/:id', eliminarColeccion);

routerColecciones.post('/', almacenarColeccion);

module.exports = routerColecciones;