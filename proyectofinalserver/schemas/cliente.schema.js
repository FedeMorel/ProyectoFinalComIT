const { Schema, model, ObjectId } = require('mongoose');

const clientesSchema = new Schema({
    "uid": {
        type: String,
    },
    "nombre": {
        type: String,
        default: ""
    },
    "apellido": {
        type: String,
        default: ""
    },
    "telefono": {
        type: String,
        default: ""
    },
    "direccion": {
        type: String,
        default: ""
    },
    "historial": [{
        "fecha": {
            type: String,
            default: ""
        },
        "cantidad": {
            type: Number,
            default: ""
        },
        "total": {
            type: Number,
            default: ""
        },
        "productos": [{
            "nombre": {
                type: Number,
                default: ""
            },
            "cantidad": {
                type: Number,
                default: ""
            },
            "precio": {
                type: Number,
                default: ""
            }
        }]
    }],
    "favorito": {
        type: [ObjectId],
        ref: 'producto'
    },
    "carrito": {
        type: [ObjectId],
        ref: 'producto'
    }
});

const Clientes = new model('clientes', clientesSchema);

clientesSchema.set('toJSON', {
    transform: (document, returnesObject) => {
        returnesObject.id = returnesObject._id
        delete returnesObject._id
        delete returnesObject.__v
    }
});

module.exports = { Clientes };