import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { getAllOrder, updateOrderStatus } from "../controllers/adminOrder.controller.js";

const router = Router();


router.route('/get-allorders').get(isVarifyUser , isAdmin , getAllOrder)
router.route('/update-status/:orderId').put(isVarifyUser , isAdmin , updateOrderStatus)


export default router;