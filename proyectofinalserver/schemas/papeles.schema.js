const { Schema, model, Mongoose } = require('mongoose');

const coleccionSchema = new Schema({
    categoria: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    cantidadPapeles: {
        type: Number,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    vendedor: {
        type: Mongoose.prototype.ObjectId,
        require: true
    }

});

const Colecciones = new model('colecciones', coleccionSchema);

coleccionSchema.set('toJSON', {
    transform: (document, returnesObject) => {
        returnesObject.id = returnesObject._id
        delete returnesObject._id
        delete returnesObject.__v
    }
});

module.exports = { Colecciones };