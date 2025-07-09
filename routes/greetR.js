import express from 'express';
import * as greetCtrl from '../controllers/greetCtrl.js';

const router = express.Router();
router.get('/greet', greetCtrl.getGreet);

export default router;
