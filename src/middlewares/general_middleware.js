import SqlModels from "../models/init-models.js";
var models = SqlModels()

async function Emb_req_is_complete(req, res, next) {
    const data = req.params
    if (!data.id || data.id == "") {
        res.status(500).json({
            message: "No se ha ingresado un id"
        })
        return
    }
    else {
        next();
    }
}

async function Emb_exists_Prm(req, res, next) {
    try {
        const dta = await models.Embarazos.findByPk(req.params.id)
        if (dta == null) {
            res.status(400).json({
                message: "Este embarazo no existe",
            })
            return
        }
        req.MiddData = dta;
        next();
    } catch (error) {
        res.status(400).json({
            err: error.message
        })
        return
    }
}


async function Emb_exists_for_Usr_Prm(req, res, next) {
    try {
        const dta = await models.Embarazos.findOne({
            where: {
                usr_codigo: req.params.id
            }
        })
        if (dta == null) {
            res.status(400).json({
                message: "Este usuario no tiene un embarazo en curso",
            })
            return
        }
        req.MiddData = dta;
        next();
    } catch (error) {
        res.status(400).json({
            err: error.message
        })
        return
    }
}


async function Usr_exists_Prm(req, res, next) {
    try {
        const dta = await models.Usuarios.findByPk(req.params.id)
        if (dta == null) {
            res.status(400).json({
                message: "Este usuario no existe"
            })
            return
        }
        req.MiddData = dta;
        next();
    } catch (error) {
        res.status(400).json({
            err: error.message
        })
        return
    }
}

async function Usr_exists_Bdy(req, res, next) {
    try {
        const dta = await models.Usuarios.findByPk(req.body.usr_codigo)
        if (dta == null) {
            res.status(400).json({
                message: "Este usuario no existe"
            })
            return
        }
        req.MiddData = dta;
        next();
    } catch (error) {
        res.status(400).json({
            err: error.message
        })
        return
    }
}
export default async function getPerfilGestante(req, res, next) {
    const usr_codigo = req.params;
    try {
        const gestante = await models.Usuarios.findOne({
            where: {
                usr_codigo: usr_codigo.id,
                usr_type: 0,
            },
        });
        if(gestante==null){
            res.status(500).json({
                message: "Este usuario no es una gestante",
            });
        }
        else{
            req.gestante = gestante;
            next();
        }
       

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
}

async function Pres_alrdy_reg(req,res,next){
    try {
        let Prs = await models.RegPresion.findOne({
            where: {
                emb_codigo: req.MiddData.emb_codigo
            },
            order: [
                ['regPr_numSemana', 'DESC']
            ]
        });
        if (Prs.regPr_numSemana>=req.MiddData.emb_numSemana){
            res.status(400).json({
                message: "Ya se registro la presion durante esta semana"
            })
            return
        }
        next()

    } catch (error) {
        res.status(400).json({
            err: error.message
        })
        return
    }
}

async function Peso_alrdy_reg(req, res, next) {
    try {
        const Pso = await models.RegPeso.findOne({
            where: {
                emb_codigo: req.MiddData.emb_codigo
            },
            order: [
                ['regPs_numSemana', 'DESC']
            ]
        });
        if (Pso.regPs_numSemana>=req.MiddData.emb_numSemana){
            res.status(400).json({
                message: "Ya se registro el peso durante esta semana"
            })
            return
        }
        next()
    } catch (error) {
        res.status(400).json({
            err: error.message
        })
        return
    }

}

export const methods = {
    Emb_req_is_complete,
    Emb_exists_Prm,
    Usr_exists_Prm,
    Usr_exists_Bdy,
    Emb_exists_for_Usr_Prm,
    Peso_alrdy_reg,
    Pres_alrdy_reg,
    getPerfilGestante
}