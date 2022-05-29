import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { router as v1Router } from './routes/v1';

const origin = {
  // TODO: Whitelist origin
  origin: '*'
};

const app = express();

app.use(cors(origin));

app.use(compression());

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', v1Router);


export { app }