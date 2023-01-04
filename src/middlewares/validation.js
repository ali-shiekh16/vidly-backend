function validateId(req, res, next) {
  const id = +req.params.id;
  if (!(Number.isInteger(id) || id > 0))
    return res.status(400).send('Invalid ID.');
  next();
}

export { validateId };
