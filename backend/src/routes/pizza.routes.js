import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { addPizza, getAllPizzas, updatePizza } from "../controllers/pizza.controller.js";

const router = Router();

router.route('/get-allpizza').get(getAllPizzas)

// protected routes
router.route('/add-pizza').post(isVarifyUser , isAdmin , addPizza)
router.route('/update-pizza/:pizzaId').put(isVarifyUser , isAdmin , updatePizza)


export default router;