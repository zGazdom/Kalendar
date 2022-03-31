import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from '../routes/index.js';

const dotenv = config();
dotenvExpand.expand(dotenv);

export default function createApp() {
  const app = express();

  // Enable Parsing Middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Enable CORS
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    }),
  );

  app.use('/', routes);
  app.use(
    express.static(
      path.join(path.dirname(fileURLToPath(import.meta.url)), '../../public'),
    ),
  );

  return app;
}
