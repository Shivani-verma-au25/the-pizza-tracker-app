import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { addPizza } from "../controllers/pizza.controller.js";

const router = Router();

// adminroutes
router.route('/add-pizza').post(isVarifyUser , isAdmin , addPizza)


export default router;