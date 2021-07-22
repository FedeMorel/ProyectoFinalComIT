const { request, response } = require("express");
const { Producto } = require('../schemas/producto.schema');

const returnAllItems = async(req = request, res = response) => {
    const [total, colecciones] = await Promise.all([Producto.countDocuments({ "categoria": "Farmhouse" }), Producto.find({ "categoria": "Farmhouse" })]);
    res.json({
        "cantidad": total,
        "resultados": colecciones
    });
}

const returnOneItem = async(req = request, res = response) => {
    const id = req.params.id;
    const item = await Producto.findById(id);
    res.json(item);
}

const deleteItems = async(req = request, res = response) => {
    const id = req.params.id;
    await Producto.findByIdAndDelete(id);
    res.status(200).end();
}

const aggregateItem = async(req = request, res = response) => {
    const newItem = req.body;
    const item = new Producto(newItem);
    await item.save();
    res.status(201).end();
}

module.exports = { returnAllItems, returnOneItem, deleteItems, aggregateItem }