const { request, response } = require('express');
const { Colecciones } = require('../schemas/papeles.schema');

const obtenerColeccion = async(req = request, res = response) => {
    const [total, colecciones] = await Promise.all([Colecciones.countDocuments(), Colecciones.find()]);
    res.json({
        "cantidad": total,
        "resultados": colecciones
    })
}

const obtenerUnaColeccion = (req = request, res = response) => {
    const id = req.params.id;
    Colecciones.findById(id)
        .then(coleccion => {
            res.json(coleccion);
        })
        .catch(err => {
            console.log(err);
            res.end();
        })
}

const eliminarColeccion = (req = request, res = response) => {
    const id = req.params.id;
    Colecciones.findByIdAndDelete(id)
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        })
}

const almacenarColeccion = (req = request, res = response) => {
    const nuevaColeccion = req.body;
    const coleccion = new Colecciones(nuevaColeccion);
    coleccion.save()
        .then(res.status(200).end())
        .catch(err => {
            console.log(err);
        });
}



module.exports = { obtenerColeccion, obtenerUnaColeccion, eliminarColeccion, almacenarColeccion }