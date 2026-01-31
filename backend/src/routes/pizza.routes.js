import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { addPizza, getAllPizzas } from "../controllers/pizza.controller.js";

const router = Router();

router.route('/get-allpizza').post(getAllPizzas)

// protected routes
router.route('/add-pizza').post(isVarifyUser , isAdmin , addPizza)


export default router;