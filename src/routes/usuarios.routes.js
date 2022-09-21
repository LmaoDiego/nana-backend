import { Router } from "express";
import { methods as gnrlMiddleware } from "../middlewares/general_middleware.js"
import { methods as usuariosController } from "../controllers/usuarios.controller.js";
const router = Router();


router.get("/", usuariosController.getUsuarios);

router.get("/:id",
    gnrlMiddleware.Usr_exists_Prm,
    usuariosController.getUsuario
);

router.get("/:id",
    usuariosController.getPerfilGestanteController
);
//router.post("/", usuariosController.addUsuario);
export default router;
