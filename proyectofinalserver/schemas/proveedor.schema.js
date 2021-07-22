const { Schema, model } = require('mongoose');

const proveedorSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    apellido: {
        type: String,
        require: true
    },
    mail: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    direccion: {
        calle: {
            type: String,
            require: true
        },
        altura: {
            type: Number,
            require: true
        },
        localidad: {
            type: String,
            require: true
        },
        codigo_postal: {
            type: Number,
            require: true
        }
    }
});



const Proveedores = new model('proveedores', proveedorSchema);

proveedorSchema.set('toJSON', {
    transform: (document, returnesObject) => {
        returnesObject.id = returnesObject._id
        delete returnesObject._id
        delete returnesObject.__v
    }
});



module.exports = { Proveedores };