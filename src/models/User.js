const { Schema, model } = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new Schema(
  {
    numDoc: {
      type: Number,
      required: [true,'Error, el número de identificación es obligatorio'],
      unique: true
    },
    nombre: { 
      type: String,
      required: [true,'Error, el nombre es obligatorio']
    },
    apellidos:  { 
      type: String,
      required: [true,'Error, los apellidos son obligatorios']
    },
    direccion: String,
    fecha_nac: String,
    email:  { 
      type: String,
      required: [true,'Error, el correo es obligatorio']
    },
    usuario:  { 
      type: String,
      required: [true,'Error, el nombre de usuario es obligatorio']
    },
    clave:  { 
      type: String,
      required: [true,'Error, debe suministrar una contraseña']
    },
    genero:  { 
      type: String,
      required: [true,'Error, debe especificar un género']
    },
    rol:  { 
      type: String,
      required: [true,'Error, debe especificar un rol']
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator, { message: 'Error, otro usuario ya tiene ese número de identificación.' });


module.exports = model("User", userSchema);
