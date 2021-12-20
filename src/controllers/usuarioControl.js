const usuarioControl = {};

const Usuario = require("../models/Usuario");

usuarioControl.verUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().sort({ apellidos: 1 });
    res.json(usuarios);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

usuarioControl.crearUsuario = async (req, res) => {
  try {
    const {
      numDoc,
      nombre,
      apellidos,
      direccion,
      fecha_nac,
      email,
      usuario,
      clave,
      genero,
      rol,
    } = req.body;
    const nuevoUsuario = new Usuario({
      numDoc: numDoc,
      nombre: nombre,
      apellidos: apellidos,
      direccion: direccion,
      fecha_nac: fecha_nac,
      email: email,
      usuario: usuario,
      clave: clave,
      genero: genero,
      rol: rol,
    });
    await nuevoUsuario.save();
    res.json("Usuario creado");
  } catch (e) {
    res.json(e);
  }
};

usuarioControl.verUsuario = async (req, res) => {
  const usuario = await Usuario.find({ numDoc: req.params.numDoc });
  res.json(usuario);
};

usuarioControl.validarCredenciales = async (req, res) => {
  const usuario = await Usuario.findOne({ usuario: req.params.usuario });
  if (usuario.clave === req.params.clave) {
    res.json(true);
  } else {
    res.json(false);
  }
};

usuarioControl.borrarUsuario = async (req, res) => {
  await Usuario.findOneAndDelete({ numDoc: req.params.numDoc });
  res.json("Usuario borrado");
};

usuarioControl.editarUsuario = async (req, res) => {
  const {
    numDoc,
    nombre,
    apellidos,
    direccion,
    fecha_nac,
    email,
    usuario,
    clave,
    genero,
    rol,
  } = req.body;
  await Usuario.findOneAndUpdate(
    { numDoc: req.params.numDoc },
    {
      numDoc: numDoc,
      nombre: nombre,
      apellidos: apellidos,
      direccion: direccion,
      fecha_nac: fecha_nac,
      email: email,
      usuario: usuario,
      clave: clave,
      genero: genero,
      rol: rol,
    }
  );
  res.json("Usuario actualizado");
};

module.exports = usuarioControl;
