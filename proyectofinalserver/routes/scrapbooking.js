const { Router } = require('express');
const { obtenerProductosScrap, obtenerUnProductoScrap, eliminarProductoScrap, almacenarProductoScrap } = require('../controllers/scrapbooking.controllers')
const routerScrapbooking = Router();

routerScrapbooking.get('/', obtenerProductosScrap);

routerScrapbooking.get('/:id', obtenerUnProductoScrap);

routerScrapbooking.delete('/:id', eliminarProductoScrap);

routerScrapbooking.post('/', almacenarProductoScrap);

module.exports = routerScrapbooking;