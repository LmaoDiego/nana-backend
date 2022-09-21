import { Router } from "express";
import { methods as gnrlMiddleware } from "../middlewares/general_middleware.js"
import { methods as embarazoController } from "../controllers/embarazo.controller.js";

const router = Router();

router.get("/", embarazoController.getEmbarazos);

router.get("/:id",
    gnrlMiddleware.Emb_req_is_complete,
    gnrlMiddleware.Emb_exists_Prm,
    embarazoController.getEmbarazo
);

router.get("/evol/:id",
    gnrlMiddleware.Usr_exists_Prm,
    gnrlMiddleware.Emb_exists_for_Usr_Prm,
    embarazoController.getEmbEvolucion
);

router.post("/",
    gnrlMiddleware.Usr_exists_Bdy,
    embarazoController.postEmbarazo
);
//PESO
router.put("/peso/:id",
    gnrlMiddleware.Emb_req_is_complete,
    gnrlMiddleware.Emb_exists_Prm,
    gnrlMiddleware.Peso_alrdy_reg,
    embarazoController.updatePeso
);

router.get("/peso/:id",
    gnrlMiddleware.Emb_req_is_complete,
    gnrlMiddleware.Emb_exists_Prm,
    embarazoController.getPesoEvo
)
//PRESION
router.put("/presion/:id",
    gnrlMiddleware.Emb_req_is_complete,
    gnrlMiddleware.Emb_exists_Prm,
    gnrlMiddleware.Pres_alrdy_reg,
    embarazoController.updatePresion
);

router.get("/presion/:id",
    gnrlMiddleware.Emb_req_is_complete,
    gnrlMiddleware.Emb_exists_Prm,
    embarazoController.getPresionEvo
)

router.put("/update/:id",
gnrlMiddleware.Emb_exists_Prm,
embarazoController.updateSemana
);

//router.post("/", usuariosController.addUsuario);
export default router;
