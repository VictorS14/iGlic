import { Router } from 'express';
import * as glicoseController from '../controllers/glicoseController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = Router();

router.use(authMiddleware);

router.post('/glicose', glicoseController.store);

router.put('/glicose/:id', glicoseController.update);

router.get('/glicose/average', glicoseController.average);

router.get('/glicose/average-period', glicoseController.averageByPeriod);

router.delete('/glicose/:id', glicoseController.removeMeasurement);

router.post('/glicose/target-range', glicoseController.saveTargetRange);

router.get('/glicose/target-range', glicoseController.getTargetRange);

router.get('/glicose/recent-readings', glicoseController.getRecentReadings);

router.get('/glicose/all-data', glicoseController.getAllData);


export default router; 