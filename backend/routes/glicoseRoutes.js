import { Router } from 'express';
import * as glicoseController from '../controllers/glicoseController.js';

const router = Router();

router.post('/glicose', glicoseController.store);

router.put('/glicose/:id', glicoseController.update);

router.get('/glicose/average', glicoseController.average);

router.get('/glicose/average-period', glicoseController.averageByPeriod);

router.delete('/glicose/:id', glicoseController.removeMeasurement);


export default router; 