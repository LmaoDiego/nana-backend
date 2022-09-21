import SqlModels from "../models/init-models.js"
var models = SqlModels()

export async function getEmbarazos(req, res) {
  try {
    const embarazos = await models.Embarazos.findAll();
    res.status(200).json(embarazos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function getEmbarazo(req, res) {
  res.status(500).json(req.MiddData)
}

export async function postEmbarazo(req, res) {
  try {
    const emb = await models.Embarazos.findOne({
      where: {
        usr_codigo: req.body.usr_codigo,
        emb_estado: 0
      }
    })
    if (emb != null) {
      res.status(500).json({
        message: "El usuario ya tiene un Embarazo existente en curso"
      })
      return
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }

  try {
    const embdata = await models.Embarazos.create({
      usr_codigo: req.body.usr_codigo,
      emb_initSemana: req.body.emb_numSemana,
      emb_numSemana: req.body.emb_numSemana
    })
    const rpsdata = await models.RegPeso.create({
      emb_codigo: embdata.dataValues.emb_codigo,
      regPs_peso: 0,
      regPs_numSemana: req.body.emb_numSemana
    })
    const rprdata = await models.RegPresion.create({
      emb_codigo: embdata.dataValues.emb_codigo,
      regPr_presionDia: 0,
      regPr_presionSis: 0,
      regPr_numSemana: req.body.emb_numSemana
    })
    res.status(200).json({
      Embarazo: embdata,
      Peso: rpsdata,
      Presion: rprdata
    }
    )
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export async function updatePresion(req, res) {
  try {
    let newPrs = await models.RegPresion.create({
      emb_codigo: req.MiddData.emb_codigo,
      regPr_presionDia: req.body.presion_Dia,
      regPr_presionSis: req.body.presion_Sis,
      regPr_numSemana: req.MiddData.emb_numSemana
    })
    res.status(200).json({ message: "Presion Actualizada" })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export async function updatePeso(req, res) {
  try {
    let newPso = await models.RegPeso.create({
      emb_codigo: req.MiddData.emb_codigo,
      regPs_peso: req.body.emb_peso,
      regPs_numSemana: req.MiddData.emb_numSemana
    })
    res.status(200).json({ message: "Peso Actualizado" })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export async function getPesoEvo(req,res){
  try {
    let arrPso = await models.RegPeso.findAll({
      where: {
          emb_codigo: req.MiddData.emb_codigo
      },
      order: [
          ['regPs_numSemana', 'DESC']
      ]
  })
  let resArr = []
  arrPso.forEach(psoelem => {
    resArr.push({"reg_peso":psoelem.regPs_peso,"reg_semana":psoelem.regPs_numSemana})
  });
  
  res.status(200).json(resArr)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export async function getPresionEvo(req,res){
  try {
    let arrPso = await models.RegPresion.findAll({
      where: {
          emb_codigo: req.MiddData.emb_codigo
      },
      order: [
          ['regPr_numSemana', 'DESC']
      ]
  })
  let resArr = []
  arrPso.forEach(psoelem => {
    resArr.push({
      "reg_presionDia":psoelem.regPr_presionDia,
      "reg_presionSis":psoelem.regPr_presionSis,
      "reg_semana":psoelem.regPr_numSemana
    })
  });
  
  res.status(200).json(resArr)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export async function updateSemana(req, res) {
  try {
    let emb = await models.Embarazos.update({
      emb_numSemana: parseInt(req.MiddData.emb_numSemana) + 1
    }, {
      where: {
        emb_codigo: req.MiddData.emb_codigo
      }
    })
    res.status(200).json({
      message: "Embarazo ha sido actualizado"
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export async function getEmbEvolucion(req, res) {
  console.log("evo1");
  console.log(req.MiddData);
  try {
    const pso = await models.RegPeso.findAll({
      where: {
        emb_codigo: req.MiddData.emb_codigo
      }
    })
    const prs = await models.RegPresion.findAll({
      where: {
        emb_codigo: req.MiddData.dataValues.emb_codigo
      }
    })
    res.status(200).json({
      pso,
      prs
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

export const methods = {
  getEmbarazos,
  getEmbarazo,
  postEmbarazo,
  updatePeso,
  updatePresion,
  getEmbEvolucion,
  updateSemana,
  getPesoEvo,
  getPresionEvo
};