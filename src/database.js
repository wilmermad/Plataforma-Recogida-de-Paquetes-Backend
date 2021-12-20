const mongoose = require('mongoose');

const URI = process.env.BD_URI;

mongoose.connect(URI);

const conexion = mongoose.connection;

conexion.once('open', () => {
    console.log('BD conectada')
})