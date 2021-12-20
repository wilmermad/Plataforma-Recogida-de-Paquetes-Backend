const { Router } = require("express");
const router = Router();

const {
  verUsuarios,
  crearUsuario,
  verUsuario,
  validarCredenciales,
  borrarUsuario,
  editarUsuario
} = require("../controllers/usuarioControl");

router.route("/logueo/:usuario/:clave")
    .get(validarCredenciales);

router.route("/")
    .get(verUsuarios)
    .post(crearUsuario);

router.route("/:numDoc")
  .get(verUsuario)
  .delete(borrarUsuario)
  .put(editarUsuario);

module.exports = router;
