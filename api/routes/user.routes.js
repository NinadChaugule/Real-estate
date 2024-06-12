import express from 'express';
import { test } from '../controller.js/user.control.js';


const router = express.Router();

router.get('/test', test)

export default router;