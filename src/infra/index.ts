import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { app as expressApp } from './api/app';
import { initDatabase } from 'infra/database/init';

const { PORT = 3000 } = process.env;

const startServer = (app: express.Express) => {
  app.listen(PORT, () => {
    console.log(`API now up and running on port ${PORT}`);
  });
};

const run = async (): Promise<void> => {
  await initDatabase();

  startServer(expressApp);
};

run();
