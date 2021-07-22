const { request, response } = require('express');
const { Proveedores } = require('../schemas/proveedor.schema');

const obetenerProveedores = async(req = request, res = response) => {
    const [total, colecciones] = await Promise.all([Proveedores.countDocuments(), Proveedores.find({})]);
    res.json({
        "cantidad": total,
        "resultados": colecciones
    });
}

const obtenerUnProveedor = (req = request, res = response) => {
    const id = req.params.id;
    Proveedores.findById(id)
        .then(proveedor => {
            res.json(proveedor);
        })
        .catch(err => {
            console.log(err);
        })
}

const almacenarProveedores = (req = request, res = response) => {
    const nuevoProveedor = req.body;
    const proveedor = new Proveedores(nuevoProveedor);
    proveedor.save()
        .then(res.status(201).end())
        .catch(err => {
            console.log(err);
        });
}

const eliminarProveedor = (req = request, res = response) => {
    const id = req.params.id;
    Proveedores.findByIdAndDelete(id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        });
}

module.exports = { obetenerProveedores, almacenarProveedores, obtenerUnProveedor, eliminarProveedor };