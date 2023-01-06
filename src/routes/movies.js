import { Router } from 'express';
import mongoose from 'mongoose';
import { validateId } from '../middlewares/validation.js';
import Genre from '../models/genre.js';
import Movie, { validate } from '../models/movie.js';

const router = new Router();

router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

router.get('/:id', validateId, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).send(movie);

  res.send(movie);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const genre = await Genre.findById(req.body.genre);
  if (!genre)
    return res.status(404).send('The genre with the given ID was not found.');

  const movie = new Movie({
    ...req.body,
    genre: {
      _id: genre._id,
      name: genre.name,
    },
  });
  await movie.save();
  res.status(201).send(movie);
});

router.put('/:id', validateId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        ...req.body,
      },
    },
    { new: true }
  );

  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
});

router.delete('/:id', validateId, async (req, res) => {
  const movie = await Movie.findByIdAndRemove(req.params.id);
  if (!movie)
    return res.status(404).send('The movie with the given ID was not found.');

  res.send(movie);
});

export default router;
