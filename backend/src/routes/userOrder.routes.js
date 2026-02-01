import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { getAllOrders, userOrder } from "../controllers/order.controller.js";
const router = Router();



router.route('/placed-order').post(isVarifyUser , userOrder)
router.route('/get-allorders').get(isVarifyUser , getAllOrders)




export default router;