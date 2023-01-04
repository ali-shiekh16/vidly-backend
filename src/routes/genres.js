import { Router } from 'express';
import { validateId } from '../middlewares/validation.js';
import { validate } from './models/genre.js';

let genres = [
  { id: 1, name: 'thrill' },
  { id: 2, name: 'romance' },
  { id: 3, name: 'action' },
  { id: 4, name: 'horror' },
];

const router = new Router();

router.get('/', (req, res) => {
  res.send(genres);
});

router.get('/:id', validateId, (req, res) => {
  const genre = genres.find(genre => genre.id === +req.params.id);
  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.');

  res.send(genre);
});

router.post('/', (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const newGenre = {
    id: genres[genres.length - 1].id + 1,
    name: req.body.name,
  };

  genres.push(newGenre);

  res.status(201).send(newGenre);
});

router.put('/:id', validateId, (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const genreID = +req.params.id;
  const genre = genres.find(genre => genre.id === genreID);
  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.');

  genres[genreID - 1].name = req.body.name;
  res.send(genres[genreID - 1]);
});

router.delete('/:id', validateId, (req, res) => {
  const genreID = +req.params.id;
  const genre = genres.find(genre => genre.id === genreID);
  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.');

  genres = genres.filter(genre => genre.id !== genreID);
  res.send(genres);
});

export default router;
