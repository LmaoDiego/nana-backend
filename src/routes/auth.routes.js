import { Router} from "express";

import {methods as authController} from "./../controllers/auth.controller.js";
const router= Router();

router.post("/register",authController.registerController );
router.post("/login", authController.loginController);
export default router;
