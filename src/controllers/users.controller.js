const userCtrl = {};

const User = require("../models/User");

userCtrl.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

userCtrl.createUser = async (req, res) => {
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

    const newUser = new User({
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

    await newUser.save();
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

userCtrl.getUser = async (req, res) => {
  const user = await User.find({ numDoc: req.params.numDoc } );
  
  res.json(user);
  
  
  
};

userCtrl.getUsername = async (req, res) => {
  const user = await User.findOne({ usuario: req.params.usuario });
  if(user.clave === req.params.clave){
    res.json(true);
  }else{
    res.json(false);
  }
  
}; 

userCtrl.deleteUser = async (req, res) => {
  await User.findOneAndDelete({ numDoc: req.params.numDoc });
  res.json("Usuario borrado");
};

const indicador=false;


userCtrl.updateUser = async (req, res) => {
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

  await User.findOneAndUpdate(
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

module.exports = userCtrl;
