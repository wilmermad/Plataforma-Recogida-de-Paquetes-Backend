const express = require("express");
const cors = require("cors");

const app = express();

//Configuración
app.set("puerto", process.env.PUERTO || 8080);

//Middleware
app.use(cors());
app.use(express.json());

//Rutas
app.use("/envios", require("./routes/envios"));
app.use("/usuarios", require("./routes/usuarios"));

module.exports = app;
