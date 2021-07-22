const { Router } = require('express');
const { obtenerTarjetas, obtenerUnaTarjeta, elimiarUnaTarjeta, almacenarTarjeta } = require('../controllers/scrapbooking.controllers')
const routerTarjetasScrap = Router();


routerTarjetasScrap.get('/', obtenerTarjetas);

routerTarjetasScrap.get('/:id', obtenerUnaTarjeta);

routerTarjetasScrap.delete('/:id', elimiarUnaTarjeta);

routerTarjetasScrap.post('/', almacenarTarjeta);

module.exports = routerTarjetasScrap;