const { request, response } = require('express');
const { Producto } = require('../schemas/producto.schema');


const obtenerProductosScrap = async(req = request, res = response) => {
    const { subcategoria, tematica } = req.query;
    if (subcategoria && tematica == undefined) {
        const [total, colecciones] = await Promise.all([Producto.countDocuments({ "categoria": 'Scrapbooking', "subcategoria": subcategoria }), Producto.find({ "categoria": 'Scrapbooking', "subcategoria": subcategoria })]);
        res.json({
            "cantidad": total,
            "resultados": colecciones
        });
    } else if (subcategoria && tematica) {

        const [total, colecciones] = await Promise.all([Producto.countDocuments({ "categoria": 'Scrapbooking', "subcategoria": subcategoria, "tematica": tematica }), Producto.find({ "categoria": 'Scrapbooking', "subcategoria": subcategoria, "tematica": tematica })]);
        res.json({
            "cantidad": total,
            "resultados": colecciones
        });
    } else {
        const [total, colecciones] = await Promise.all([Producto.countDocuments({ "categoria": 'Scrapbooking' }), Producto.find({ "categoria": 'Scrapbooking' })]);
        res.json({
            "cantidad": total,
            "resultados": colecciones
        });
    }
}

const obtenerUnProductoScrap = (req = request, res = response) => {
    const id = req.params.id;
    Producto.findById(id)
        .then(producto => {
            res.json(producto);
        })
        .catch(err => {
            console.log(err);
            res.status(503).end();
        });
}

const eliminarProductoScrap = (req = request, res = response) => {
    const id = req.params.id;
    Producto.findByIdAndDelete(id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
            res.status(503).end();
        });
}

const almacenarProductoScrap = (req = request, res = response) => {
    const nuevoProductoScrap = req.body;
    const scrap = new Producto(nuevoProductoScrap);
    scrap.save()
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
            res.status(503).end();
        })
}

const obtenerTarjetas = async(req = request, res = response) => {
    const [total, colecciones] = await Promise.all([Producto.countDocuments({ "categoria": 'Scrapbooking', "subcategoria": "Tarjetas" }), Producto.find({ "categoria": 'Scrapbooking', "subcategoria": "Tarjetas" })]);
    res.json({
        "cantidad": total,
        "resultados": colecciones
    });
}

const obtenerUnaTarjeta = (req = request, res = response) => {
    const id = req.params.id;
    Producto.findById(id)
        .then(tarjeta => {
            res.json(tarjeta);
        })
        .catch(err => {
            console.log(err);
        });
}

const elimiarUnaTarjeta = (req = request, res = response) => {
    const id = req.params.id;
    Producto.findByIdAndDelete(id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        });
}

const almacenarTarjeta = (req = request, res = response) => {
    const nuevaTarjeta = req.body;
    const tarjeta = new Producto(nuevaTarjeta);
    tarjeta.save()
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
        });
}

module.exports = { obtenerProductosScrap, obtenerUnProductoScrap, eliminarProductoScrap, almacenarProductoScrap, obtenerTarjetas, obtenerUnaTarjeta, elimiarUnaTarjeta, almacenarTarjeta }