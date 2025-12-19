import {Router} from 'express';
import { getCurrentUser, signinUser, signOutUser, signupUser } from '../controllers/user.controller.js';
import { isVarifyUser } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/signup').post(signupUser);
router.route('/signin').post(signinUser);
router.route('/signout').post(signOutUser);

// protected routes
router.route('/get-current-user').get(isVarifyUser , getCurrentUser)

export default router;  