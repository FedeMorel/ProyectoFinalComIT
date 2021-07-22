const { request, response } = require("express");
const { Clientes } = require('../schemas/cliente.schema');

const returnAllItems = async(req = request, res = response) => {
    const [total, colecciones] = await Promise.all([Clientes.countDocuments({}), Clientes.find({})]);
    res.json({
        "cantidad": total,
        "resultados": colecciones
    });
}

const returnOneItem = async(req = request, res = response) => {
    const uid = req.params.uid;
    const user = await Clientes.findOne({
        "uid": uid
    }).populate('carrito')
    if (user) {
        res.json(user);
    } else {
        let data = {
            "uid": uid,
            "nombre": "",
            "apelldio": "",
            "telefono": "",
            "direccion": " ",
            "historial": [],
            "favorito": [],
            "carrito": []
        }
        const newUser = new Clientes(data);
        await newUser.save();
        await res.json(newUser);
    }
}

const mostrarClienteSinPopulate = async(req = request, res = response) => {
    const uid = req.params.uid;
    const user = await Clientes.findOne({
        "uid": uid
    })
    res.json(user);
}


const modificarCliente = async(req = request, res = response) => {
    const { uid } = req.params;
    const idProduct = req.body.carrito;
    Clientes.findOne({ "uid": uid })
        .then(objeto => manejoDeArray(objeto, idProduct))
        .then(res.status(200).end())
        .catch(err => console.log(err))
}

const manejoDeArray = ({ carrito, id }, idProduct) => {
    carrito.push(idProduct);
    Clientes.updateOne({ "_id": id }, { "carrito": carrito })
        .catch(err => console.log(err))
}



const deleteItems = async(req = request, res = response) => {
    const id = req.params.id;
    await Clientes.findByIdAndDelete(id);
    res.status(200).end();
}

const aggregateItem = async(req = request, res = response) => {
    const uid = req.body.uid;
    const user = await Clientes.findOne({
        "uid": uid
    });
    if (!user) {
        let data = {
            "uid": uid,
            "nombre": "",
            "apelldio": "",
            "telefono": "",
            "direccion": " ",
            "historial": [],
            "favorito": [],
            "carrito": []
        }
        const newUser = new Clientes(data);
        await newUser.save();
        res.status(201).end();
    }
}

const elimiarDelCarrito = (req = request, res = response) => {
    const { uid } = req.params;
    const idProduct = req.body.producto;
    Clientes.findOne({ "uid": uid })
        .then(objeto => manejoDeArrayEliminar(objeto, idProduct))
        .then(res.status(200).end())
        .catch(err => console.log(err))
}

const manejoDeArrayEliminar = ({ carrito, id }, idProduct) => {
    carrito = carrito.filter(producto => producto != idProduct)
    Clientes.updateOne({ "_id": id }, { "carrito": carrito })
        .catch(err => console.log(err))
}

module.exports = { returnAllItems, returnOneItem, deleteItems, aggregateItem, modificarCliente, elimiarDelCarrito, mostrarClienteSinPopulate }