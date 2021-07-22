require('dotenv').config();
const { dbConnection } = require('./mongo');
const express = require('express');
const cors = require('cors');
const routerCocina = require('./routes/cocina');
const routerSuvenirs = require('./routes/suvenirs');
const routerDecoracion = require('./routes/decoracion');
const routerBebes = require('./routes/bebes');
const routerLetras = require('./routes/letras');
const routerCoutry = require('./routes/country');
const routerFarmhouse = require('./routes/farmhouse');
const routerProveedores = require('./routes/proveedores');
const routerColecciones = require('./routes/colecciones');
const routerScrapbooking = require('./routes/scrapbooking');
const routerTarjetasScrap = require('./routes/tarjetasScrap');
const routerClientes = require('./routes/clientes');
const routerProducto = require('./routes/productos')
const app = express();

const main = () => {
    const PORT = process.env.PORT || 3003;

    app.use(cors());

    app.use(express.json());

    app.use('/api/productos/pinturaCountry/cocina', routerCocina);

    app.use('/api/productos/pinturaCountry/suvenirs', routerSuvenirs);

    app.use('/api/productos/pinturaCountry/decoracion', routerDecoracion);

    app.use('/api/productos/pinturaCountry/bebes', routerBebes);

    app.use('/api/productos/pinturaCountry/letras', routerLetras);

    app.use('/api/productos/farmhouse', routerFarmhouse);

    app.use('/api/productos/pinturaCountry', routerCoutry)

    app.use('/api/proveedores', routerProveedores);

    app.use('/api/colecciones', routerColecciones);

    app.use('/api/productos/scrapbooking', routerScrapbooking);

    app.use('/api/productos/tarjetas', routerTarjetasScrap);

    app.use('/api/productos', routerProducto);

    app.use('/api/clientes', routerClientes);

    app.use((req, res) => {
        res.status(400).end()
    });

    try {
        app.listen(PORT, () => {
            console.log(`Escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log('Error!!');
    }
}

dbConnection()
    .then(main)
    .catch(err => {
        console.log(err)
    });