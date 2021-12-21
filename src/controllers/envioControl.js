const envioControl = {};

const Envio = require("../models/Envio");
const Usuario = require("../models/Usuario");

envioControl.verEnvios = async (req, res) => {
  try {
    const envios = await Envio.find();
    res.json(envios);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

envioControl.verEnviosPorNumDocRemit = async (req, res) => {
  try {
    const envios = await Envio.find({
      numDocRemit: req.params.numDocRemit,
    }).sort({ fechaRecogida: -1 });
    res.json(envios);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

envioControl.crearEnvio = async (req, res) => {
  const {
    estado,
    fechaSalida,
    fechaEntrega,
    numDocRemit,
    nombreRemit,
    apellidosRemit,
    fechaRecogida,
    direccionRemit,
    barrioRemit,
    ciudadOrigen,
    departamentoRemit,
    hora,
    largo,
    ancho,
    alto,
    pesoAprox,
    delicado,
    numDocDest,
    nombreDest,
    apellidosDest,
    direccionDest,
    barrioDest,
    ciudadDest,
    departamentoDest,
  } = req.body;
  const nuevoEnvio = new Envio({
    estado: estado,
    fechaSalida: fechaSalida,
    fechaEntrega: fechaEntrega,
    numDocRemit: numDocRemit,
    nombreRemit: nombreRemit,
    apellidosRemit: apellidosRemit,
    fechaRecogida: fechaRecogida,
    direccionRemit: direccionRemit,
    barrioRemit: barrioRemit,
    ciudadOrigen: ciudadOrigen,
    departamentoRemit: departamentoRemit,
    hora: hora,
    largo: largo,
    ancho: ancho,
    alto: alto,
    pesoAprox: pesoAprox,
    delicado: delicado,
    numDocDest: numDocDest,
    nombreDest: nombreDest,
    apellidosDest: apellidosDest,
    direccionDest: direccionDest,
    barrioDest: barrioDest,
    ciudadDest: ciudadDest,
    departamentoDest: departamentoDest,
  });
  
  const usuario = await Usuario.findOne({ numDoc: nuevoEnvio.numDocRemit });
    
      if (usuario) {
        try {
        await nuevoEnvio.save();
        res.json("si");
      } catch (e) {
        res.json("Error, no se pudo programar la recogida. " + e);
      }
      }else{
        res.json("no")
      }
    
  } 

/* catch(e){
  res.json("Error, no se pudo programar el envío");
 } */

envioControl.verEnvio = async (req, res) => {
  const envio = await Envio.find({ _id: req.params._id });
  res.json(envio);
};

envioControl.borrarEnvio = async (req, res) => {
  await Envio.findOneAndDelete({ _id: req.params._id });
  res.json("Usuario borrado");
};

envioControl.editarEnvio = async (req, res) => {
  const {
    estado,
    fechaSalida,
    fechaEntrega,
    numDocRemit,
    nombreRemit,
    apellidosRemit,
    fechaRecogida,
    direccionRemit,
    barrioRemit,
    ciudadOrigen,
    departamentoRemit,
    hora,
    largo,
    ancho,
    alto,
    pesoAprox,
    delicado,
    numDocDest,
    nombreDest,
    apellidosDest,
    direccionDest,
    barrioDest,
    ciudadDest,
    departamentoDest,
  } = req.body;
  await Envio.findOneAndUpdate(
    { _id: req.params._id },
    {
      estado: estado,
      fechaSalida: fechaSalida,
      fechaEntrega: fechaEntrega,
      numDocRemit: numDocRemit,
      nombreRemit: nombreRemit,
      apellidosRemit: apellidosRemit,
      fechaRecogida: fechaRecogida,
      direccionRemit: direccionRemit,
      barrioRemit: barrioRemit,
      ciudadOrigen: ciudadOrigen,
      departamentoRemit: departamentoRemit,
      hora: hora,
      largo: largo,
      ancho: ancho,
      alto: alto,
      pesoAprox: pesoAprox,
      delicado: delicado,
      numDocDest: numDocDest,
      nombreDest: nombreDest,
      apellidosDest: apellidosDest,
      direccionDest: direccionDest,
      barrioDest: barrioDest,
      ciudadDest: ciudadDest,
      departamentoDest: departamentoDest,
    }
  );
  res.json("Usuario actualizado");
};

module.exports = envioControl;
