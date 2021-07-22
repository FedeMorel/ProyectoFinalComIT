const { Router } = require('express');
const { returnAllItems, returnOneItem, deleteItems, modificarCliente, elimiarDelCarrito, mostrarClienteSinPopulate } = require('../controllers/clientes.controlles');
const routerCarrito = Router();

routerCarrito.get('/', returnAllItems);

routerCarrito.get('/noPopulate/:uid', mostrarClienteSinPopulate);

routerCarrito.get('/:uid', returnOneItem);

routerCarrito.delete('/:id', deleteItems);

routerCarrito.put('/agregarAlCarrito/:uid', modificarCliente);

routerCarrito.delete('/elimiarDelCarrito/:uid', elimiarDelCarrito)


module.exports = routerCarrito;