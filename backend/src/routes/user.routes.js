import {Router} from 'express';
import { signinUser, signOutUser, signupUser } from '../controllers/user.controller.js';

const router = Router();

router.route('/signup').post(signupUser);
router.route('/signin').post(signinUser);
router.route('/signout').post(signOutUser);

export default router;  