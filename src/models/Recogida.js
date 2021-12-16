const { Schema, model } = require("mongoose");

const recogidaSchema = new Schema(
  {
    remitente: {
      numDoc: {
        type: Number,
        required: [true,'Error, el número de identificación es obligatorio']
      },
      nombre: { 
        type: String,
        required: [true,'Error, el nombre es obligatorio']
      },
      apellidos:  { 
        type: String,
        required: [true,'Error, los apellidos son obligatorios']
      },
      fecha:  { 
        type: String,
        required: [true,'Error, la fecha es obligatoria']
      },
      direccion:  { 
        type: String,
        required: [true,'Error, la dirección es obligatoria']
      },
      barrio:  { 
        type: String,
        required: [true,'Error, el barrio es obligatorio']
      },
      ciudad:  { 
        type: String,
        required: [true,'Error, la ciudad es obligatoria']
      },
      departamento:  { 
        type: String,
        required: [true,'Error, debe especificar un departamento']
      },
      hora:  { 
        type: String,
        required: [true,'Error, debe especificar una hora']
      },
      largo:  { 
        type: Number,
        required: [true,'Error, debe especificar un largo']
      },
      ancho:  { 
        type: Number,
        required: [true,'Error, debe especificar un ancho']
      },
      alto:  { 
        type: Number,
        required: [true,'Error, debe especificar un alto']
      },
      pesoAprox:  { 
        type: Number,
        required: [true,'Error, debe especificar un peso']
      },
      delicado:  { 
        type: String,
        required: [true,'Error, debe especificar si es delicado']
      }
    },
    destinatario: {
      numDocDest: {
        type: Number,
        required: [true,'Error, el número de identificación es obligatorio']
      },
      nombreDest: { 
        type: String,
        required: [true,'Error, el nombre es obligatorio']
      },
      apellidosDest:  { 
        type: String,
        required: [true,'Error, los apellidos son obligatorios']
      },
      direccionDest:  { 
        type: String,
        required: [true,'Error, la dirección es obligatoria']
      },
      barrioDest:  { 
        type: String,
        required: [true,'Error, el barrio es obligatorio']
      },
      ciudadDest:  { 
        type: String,
        required: [true,'Error, la ciudad es obligatoria']
      },
      departamentoDest:  { 
        type: String,
        required: [true,'Error, debe especificar un departamento']
      }
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Recogida", recogidaSchema);
