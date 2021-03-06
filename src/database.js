const mongoose = require('mongoose');

const URI = process.env.BD_URI || 'mongodb://wmadera:wmadera@cluster0-shard-00-00.ukhjf.mongodb.net:27017,cluster0-shard-00-01.ukhjf.mongodb.net:27017,cluster0-shard-00-02.ukhjf.mongodb.net:27017/recogida_paquetes?ssl=true&replicaSet=atlas-ci2jgb-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URI);

const conexion = mongoose.connection;

conexion.once('open', () => {
    console.log('BD conectada')
})