import express from 'express';
import { signUp } from '../controller.js/auth.control.js';


const router = express.Router();

router.post("/signUp",signUp);

export default router;