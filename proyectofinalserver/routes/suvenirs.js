const { Router } = require('express');
const { returnAllItems, returnOneItem, deleteItems, aggregateItem } = require('../controllers/suvenirs.controllers');
const routerSuvenirs = Router();


routerSuvenirs.get('/', returnAllItems);

routerSuvenirs.get('/:id', returnOneItem);

routerSuvenirs.delete('/:id', deleteItems);

routerSuvenirs.post('/', aggregateItem);

module.exports = routerSuvenirs;