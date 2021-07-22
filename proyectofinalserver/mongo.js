const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env.HOST

const dbConnection = async() => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log("Base de datos conectada");
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = { dbConnection };