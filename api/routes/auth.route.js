import express from 'express';
import { signUp, signin } from '../controller.js/auth.control.js';


const router = express.Router();

router.post("/signUp",signUp);
router.post("/signIn",signin);

export default router;