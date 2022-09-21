import SqlModels from "../models/init-models.js"
var models = SqlModels()

///
import bcryptjs from "bcryptjs";

//const encrypt = async () =>{
//const hash = await bcryptjs.hash(passwordPlain, 5);
//return hash;
//};
//

const registerController = async (req, res) => {
  try {
    const checkIsExist = await models.Usuarios.findOne({
      where: { usr_correo: req.body.usr_correo },
    });
    if (checkIsExist) {
      res.status(500).json({
        message: "El correo ya existe",
      });
      return
    }
    const hash = await bcryptjs.hash(req.body.usr_psswd, 5);
    req.body.usr_psswd = hash;
    const data = await models.Usuarios.create(req.body);
    res.status(200).json({
      message: "Registrado con exito"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const loginController = async (req, res) => {
  try {
    const usuario = await models.Usuarios.findOne({
      where: {
        usr_correo: req.body.usr_correo
      },
    });
    const checkPassword = await bcryptjs.compare(req.body.usr_psswd, usuario.usr_psswd);
    console.log(checkPassword);
    if (!checkPassword) {
      res.status(500).json({
        message: "Incorrect user or password",
      });
      return ;
    }
    //TODO: [NANA-152] AGREGAR JWT
    //const tokenJwt = await tokenSign(usuario);
    const data = {
      usuario: usuario,
    };
    res.send({ data });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const methods = {
  registerController,
  loginController
}

