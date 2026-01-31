import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { addPizza, deletePizaa, getAllPizzas, updatePizza } from "../controllers/pizza.controller.js";

const router = Router();

router.route('/get-allpizza').get(getAllPizzas)

// protected routes
router.route('/add-pizza').post(isVarifyUser , isAdmin , addPizza)
router.route('/update-pizza/:pizzaId').put(isVarifyUser , isAdmin , updatePizza)
router.route('/delete-pizza/:id').delete(isVarifyUser , isAdmin , deletePizaa)


export default router;