require("dotenv").config();
const app = require("./app");
require("./database");

async function main() {
  await app.listen(app.get("puerto"));
  console.log("Servidor en puerto ", app.get("puerto"));
}

main();
