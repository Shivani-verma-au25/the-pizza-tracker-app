import { Router } from "express";
import { isVarifyUser } from "../middlewares/auth.middleware.js";
import { addToCart, clearCart, getCart, removeFromCart, updateCartItem } from "../controllers/cart.controller.js";

const router = Router();


router.route('/get-cart').get(isVarifyUser,getCart);
router.route('/add-to-cart').post(isVarifyUser,addToCart);
router.route('/update-cart').patch(isVarifyUser,updateCartItem);
router.route('/remove-cart').post(isVarifyUser,removeFromCart);
router.route('/clear-cart').delete(isVarifyUser,clearCart);

export default router;