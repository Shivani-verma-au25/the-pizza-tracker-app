import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { getCart } from "../controllers/cart.controller.js";

const router = Router();


router.route('/get-cart').get(isVarifyUser,getCart);

export default router;