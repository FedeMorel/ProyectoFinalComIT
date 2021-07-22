const { Router } = require('express');
const { returnAllItems, returnOneItem, deleteItems, aggregateItem } = require('../controllers/decoracion.controllers');
const routerDecoracion = Router();

routerDecoracion.get('/', returnAllItems);

routerDecoracion.get('/:id', returnOneItem);

routerDecoracion.delete('/:id', deleteItems);

routerDecoracion.post('/', aggregateItem);

module.exports = routerDecoracion;