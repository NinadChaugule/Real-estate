import express from 'express';
import { google, signUp, signin } from '../controller.js/auth.control.js';


const router = express.Router();

router.post("/signUp",signUp);
router.post("/signIn",signin);
router.post("/google",google);

export default router;