const recogidaCtrl = {};

const Recogida = require("../models/Recogida");

recogidaCtrl.getRecogidas = async (req, res) => {
  try {
    const recogidas = await Recogida.find();
    res.json(recogidas);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

recogidaCtrl.createRecogida = async (req, res) => {
  try {
    const {
        remitente: {
            numDoc,
            nombre,
            apellidos,
            fecha,
            direccion,
            barrio, 
            ciudad, 
            departamento, 
            hora, 
            largo, 
            ancho, 
            alto, 
            pesoAprox, 
            delicado
          },
        destinatario: {
          numDocDest,
          nombreDest,
          apellidosDest,
          direccionDest,
          barrioDest,
          ciudadDest,
          departamentoDest
        }
    } = req.body;

    const newRecogida = new Recogida({
        remitente: {
            numDoc: numDoc,
            nombre: nombre,
            apellidos: apellidos,
            fecha: fecha,
            direccion: direccion,
            barrio: barrio, 
            ciudad: ciudad, 
            departamento: departamento, 
            hora: hora, 
            largo: largo, 
            ancho: ancho, 
            alto: alto, 
            pesoAprox: pesoAprox, 
            delicado: delicado
          },
        destinatario: {
          numDocDest: numDocDest,
          nombreDest: nombreDest,
          apellidosDest: apellidosDest,
          direccionDest:direccionDest,
          barrioDest: barrioDest,
          ciudadDest: ciudadDest,
          departamentoDest: departamento
        }
    });

    await newRecogida.save();
    res.json("Usuario creado");
  } catch (e) {
    /* if (
      (e.errors.numDoc.kind === "unique" &&
        e.errors.numDoc.path === "numDoc") ||
      (e.errors.numDoc.kind === "required" && e.errors.numDoc.path === "numDoc")
    ) {
      res.json({
        message: e.errors.numDoc.message,
        numDoc: e.errors.numDoc.kind,
        path: e.errors.numDoc.path,
      });
    } */

    res.json(e);
  }
};

recogidaCtrl.getRecogida = async (req, res) => {
  const recogida = await Recogida.find({ numDoc: req.params.numDoc } );
  
  res.json(recogida);
  
  
  
};

recogidaCtrl.getRecogidaname = async (req, res) => {
  const recogida = await Recogida.findOne({ usuario: req.params.usuario });
  if(recogida.clave === req.params.clave){
    res.json(true);
  }else{
    res.json(false);
  }
  
}; 

recogidaCtrl.deleteRecogida = async (req, res) => {
  await Recogida.findOneAndDelete({ numDoc: req.params.numDoc });
  res.json("Usuario borrado");
};

const indicador=false;


recogidaCtrl.updateRecogida = async (req, res) => {
  const {
    remitente: {
        numDoc,
        nombre,
        apellidos,
        fecha,
        direccion,
        barrio, 
        ciudad, 
        departamento, 
        hora, 
        largo, 
        ancho, 
        alto, 
        pesoAprox, 
        delicado
      },
    destinatario: {
      numDocDest,
      nombreDest,
      apellidosDest,
      direccionDest,
      barrioDest,
      ciudadDest,
      departamentoDest
    }
  } = req.body;

  await Recogida.findOneAndUpdate(
    { numDoc: req.params.numDoc },
    {
        remitente: {
            numDoc: numDoc,
            nombre: nombre,
            apellidos: apellidos,
            fecha: fecha,
            direccion: direccion,
            barrio: barrio, 
            ciudad: ciudad, 
            departamento: departamento, 
            hora: hora, 
            largo: largo, 
            ancho: ancho, 
            alto: alto, 
            pesoAprox: pesoAprox, 
            delicado: delicado
          },
        destinatario: {
          numDocDest: numDocDest,
          nombreDest: nombreDest,
          apellidosDest: apellidosDest,
          direccionDest:direccionDest,
          barrioDest: barrioDest,
          ciudadDest: ciudadDest,
          departamentoDest: departamento
        }
    }
  );
  res.json("Usuario actualizado");
};

module.exports = recogidaCtrl;
