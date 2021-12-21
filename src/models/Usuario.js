const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const usuarioSchema = new Schema(
  {
    numDoc: {
      type: Number,
      required: [true, "Error, el número de identificación es obligatorio"],
      unique: [true, "Error, número de identificación duplicado"]
    },
    nombre: {
      type: String,
      required: [true, "Error, el nombre es obligatorio"],
    },
    apellidos: {
      type: String,
      required: [true, "Error, los apellidos son obligatorios"],
    },
    direccion: String,
    fecha_nac: String,
    email: {
      type: String,
      required: [true, "Error, el correo es obligatorio"],
      unique: true
    },
    usuario: {
      type: String,
      required: [true, "Error, el nombre de usuario es obligatorio"],
      unique: true
    },
    clave: {
      type: String,
      required: [true, "Error, debe suministrar una contraseña"],
    },
    genero: {
      type: String,
      required: [true, "Error, debe especificar un género"],
    },
    rol: {
      type: String,
      required: [true, "Error, debe especificar un rol"],
    },
  },
  {
    timestamps: true,
  }
);

usuarioSchema.plugin(uniqueValidator, {message: 'Registro ya existe en la base de datos'});

module.exports = model("Usuario", usuarioSchema);
