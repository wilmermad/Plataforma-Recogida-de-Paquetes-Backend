const { Router } = require("express");
const router = Router();

const {
  verEnvios,
  crearEnvio,
  verEnviosPorNumDocRemit,
  verEnvio,
  borrarEnvio,
  editarEnvio
} = require("../controllers/envioControl");

router.route("/")
    .get(verEnvios)
    .post(crearEnvio);

router.route("/:_id")
    .get(verEnvio)
    .put(editarEnvio)
    .delete(borrarEnvio);

router.route("/filtro/:numDocRemit")
    .get(verEnviosPorNumDocRemit);

module.exports = router;
