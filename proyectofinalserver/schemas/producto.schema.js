const { Schema, model } = require('mongoose');

const productoSchema = new Schema({
    "imagen_principal": {
        type: String,
        require: true
    },
    "imagenes": {
        type: [String],
        require: true
    },
    "nombre": {
        type: String,
        require: true
    },
    "categoria": {
        type: String,
        require: true
    },
    "subcategoria": {
        type: String,
        require: true
    },
    "tematica": {
        type: String,
        require: true
    },
    "cantidad_fotos": {
        type: Number,
        require: true
    },
    "precio": {
        type: Number,
        require: true
    },
    "size": {
        type: String,
        require: true
    },
    "size_photo": {
        type: String,
        require: true
    },
    "descripcion": {
        type: String,
        require: true
    }
});

const Producto = new model('producto', productoSchema);


productoSchema.set('toJSON', {
    transform: (document, returnesObject) => {
        returnesObject.id = returnesObject._id
        delete returnesObject._id
        delete returnesObject.__v
    }
});

module.exports = { Producto };