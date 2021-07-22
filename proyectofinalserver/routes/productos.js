const { Router } = require('express');
const { returnAllItems, returnOneItem } = require('../controllers/productos.controllers');
const routerProducto = Router();

routerProducto.get('/', returnAllItems);

routerProducto.get('/:id', returnOneItem);

module.exports = routerProducto;