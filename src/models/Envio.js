const { Schema, model } = require("mongoose");

const envioSchema = new Schema(
  {
    estado: { type: String },
    fechaSalida: { type: String },
    fechaEntrega: { type: String },
    numDocRemit: {
      type: Number,
      required: [true, "Error, el número de identificación es obligatorio"],
    },
    nombreRemit: {
      type: String,
      required: [true, "Error, el nombre es obligatorio"],
    },
    apellidosRemit: {
      type: String,
      required: [true, "Error, los apellidos son obligatorios"],
    },
    fechaRecogida: {
      type: String,
      required: [true, "Error, la fecha es obligatoria"],
    },
    direccionRemit: {
      type: String,
      required: [true, "Error, la dirección es obligatoria"],
    },
    barrioRemit: {
      type: String,
      required: [true, "Error, el barrio es obligatorio"],
    },
    ciudadOrigen: {
      type: String,
      required: [true, "Error, la ciudad es obligatoria"],
    },
    departamentoRemit: {
      type: String,
      required: [true, "Error, debe especificar un departamento"],
    },
    hora: {
      type: String,
      required: [true, "Error, debe especificar una hora"],
    },
    largo: {
      type: Number,
      required: [true, "Error, debe especificar un largo"],
    },
    ancho: {
      type: Number,
      required: [true, "Error, debe especificar un ancho"],
    },
    alto: {
      type: Number,
      required: [true, "Error, debe especificar un alto"],
    },
    pesoAprox: {
      type: Number,
      required: [true, "Error, debe especificar un peso"],
    },
    delicado: {
      type: String,
      required: [true, "Error, debe especificar si es delicado"],
    },
    numDocDest: {
      type: Number,
      required: [true, "Error, el número de identificación es obligatorio"],
    },
    nombreDest: {
      type: String,
      required: [true, "Error, el nombre es obligatorio"],
    },
    apellidosDest: {
      type: String,
      required: [true, "Error, los apellidos son obligatorios"],
    },
    direccionDest: {
      type: String,
      required: [true, "Error, la dirección es obligatoria"],
    },
    barrioDest: {
      type: String,
      required: [true, "Error, el barrio es obligatorio"],
    },
    ciudadDest: {
      type: String,
      required: [true, "Error, la ciudad es obligatoria"],
    },
    departamentoDest: {
      type: String,
      required: [true, "Error, debe especificar un departamento"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Envio", envioSchema);
