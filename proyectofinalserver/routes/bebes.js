const { Router } = require('express');
const { returnAllItems, returnOneItem, deleteItems, aggregateItem, modificarCarrito } = require('../controllers/bebes.controllers');
const routerBebes = Router();


routerBebes.get('/', returnAllItems);

routerBebes.get('/:id', returnOneItem);

routerBebes.delete('/:id', deleteItems);

routerBebes.post('/', aggregateItem);

module.exports = routerBebes;