const { Router } = require('express');
const { returnAllItems, returnOneItem, deleteItems, aggregateItem } = require('../controllers/letras.controllers');
const routerLetras = Router();


routerLetras.get('/', returnAllItems);

routerLetras.get('/:id', returnOneItem);

routerLetras.delete('/:id', deleteItems);

routerLetras.post('/', aggregateItem);

module.exports = routerLetras;