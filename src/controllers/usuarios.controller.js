import SqlModels from "../models/init-models.js"
var models = SqlModels()

export async function getUsuarios(req, res) {
  try {
    const usuarios = await models.Usuarios.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getUsuario(req, res) {
  res.status(200).json(req.MiddData)
}

export async function getPerfilGestanteController(req,res){
 res.json(req.gestante);
}

export const methods= {
    getUsuarios,
    getUsuario,
    getPerfilGestanteController
};
