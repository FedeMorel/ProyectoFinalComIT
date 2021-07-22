const { request, response } = require("express");
const { Producto } = require('../schemas/producto.schema');

const returnAllItems = async(req = request, res = response) => {
    const [total, colecciones] = await Promise.all([Producto.countDocuments({}), Producto.find({})]);
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



module.exports = { returnAllItems, returnOneItem }