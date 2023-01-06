import express from 'express';
import helmet from 'helmet';
import config from 'config';
import { dbDebug, startupDebug } from './debugger.js';
import mongoose from 'mongoose';
import genresRouter from './routes/genres.js';
import moviesRouter from './routes/movies.js';

const app = express();

// * THIRD PARTY MIDDLEWARES
app.use(express.json());
app.use(helmet());

// * ROUTES
const baseURL = '/api';
app.use(`${baseURL}/genres`, genresRouter);
app.use(`${baseURL}/movies`, moviesRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Vidly!');
});

const port = config.get('port');
app.listen(port, () => startupDebug(`Listening on port ${port}`));

mongoose
  .set('strictQuery', true)
  .connect(config.get('db.connectionString'), {
    serverSelectionTimeoutMS: 2000,
  })
  .then(() => dbDebug('Connection established successfully!'))
  .catch(err => {
    // throw new Error(err.reason.error.message);
    throw new Error(err);
  });
