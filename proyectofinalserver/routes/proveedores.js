const { Router } = require('express');
const { obetenerProveedores, almacenarProveedores, obtenerUnProveedor, eliminarProveedor } = require('../controllers/proveedores.controllers')
const routerProveedores = Router();

routerProveedores.get('/', obetenerProveedores);

routerProveedores.get('/:id', obtenerUnProveedor);

routerProveedores.delete('/:id', eliminarProveedor);

routerProveedores.post('/', almacenarProveedores);

module.exports = routerProveedores;