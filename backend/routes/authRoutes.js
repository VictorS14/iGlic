import { Router } from 'express';
import * as authController from '../controllers/authController.js';

const router = Router();

router.post('/auth/request-code', authController.requestCode);
router.post('/auth/verify-code', authController.verifyCode);

export default router;