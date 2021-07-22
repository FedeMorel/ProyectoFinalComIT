const { Router } = require('express');
const { returnAllItems, returnOneItem, deleteItems, aggregateItem } = require('../controllers/cocina.controllers');
const routerCocina = Router();

routerCocina.get('/', returnAllItems);

routerCocina.get('/:id', returnOneItem);

routerCocina.delete('/:id', deleteItems);

routerCocina.post('/', aggregateItem);

module.exports = routerCocina;