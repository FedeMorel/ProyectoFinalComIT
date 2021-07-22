const { Router } = require('express');
const { returnAllItems, returnOneItem, deleteItems, aggregateItem } = require('../controllers/farmhouse.controllers');
const routerFarmhouse = Router();


routerFarmhouse.get('/', returnAllItems);

routerFarmhouse.get('/:id', returnOneItem);

routerFarmhouse.delete('/:id', deleteItems);

routerFarmhouse.post('/', aggregateItem);

module.exports = routerFarmhouse;