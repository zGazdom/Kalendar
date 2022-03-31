import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import scheduleRouter from './schedule/index.js';

const router = Router();

router.get('/', (req, res) => {
  res.sendFile(
    path.join(
      path.dirname(fileURLToPath(import.meta.url)),
      '../../public/index.html',
    ),
  );
});

router.use('/schedule', scheduleRouter);

export default router;
