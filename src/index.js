require ('dotenv').config()

const app = require('./app');
require ('./database')

async function main(){
  await app.listen(app.get('port'));
  console.log('Servidor en puerto ', app.get('port'))
}

main();

/*const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const usuariosRouter = require("./routes/usuarios");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/usuarios", usuariosRouter);
app.listen(port, function() {
  console.log("Runnning on " + port);
});
module.exports = app;*/