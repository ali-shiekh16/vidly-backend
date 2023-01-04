import mongoose from 'mongoose';

function validateId(req, res, next) {
  if (!mongoose.isValidObjectId(req.params.id))
    return res.status(400).send('Invalid ID.');
  next();
}

export { validateId };
