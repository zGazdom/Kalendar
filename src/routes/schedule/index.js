import { Router } from 'express';
import {
  getScheduleController,
  addTimeslotController,
} from '../../controllers/schedule/index.js';

const router = Router();

router.get('/', getScheduleController);
router.post('/new', addTimeslotController);

export default router;
