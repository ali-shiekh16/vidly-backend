import express from 'express';
import helmet from 'helmet';
import genresRouter from './routes/genres.js';
import config from 'config';

const app = express();

// * THIRD PARTY MIDDLEWARES
app.use(express.json());
app.use(helmet());

// * ROUTES
const baseURL = '/api';
app.use(`${baseURL}/genres`, genresRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Vidly!');
});

const port = config.get('port');
app.listen(port, () => console.log(`Listening on port ${port}`));
