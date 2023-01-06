import mongoose from 'mongoose';
// Extend Joi to validate object ID
import Joi from 'joi';
import validateObjectId from 'joi-objectid';

Joi.objectId = validateObjectId(Joi);

const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
    minlength: 3,
    maxlength: 255,
  },
  numberInStock: {
    type: Number,
    min: 0,
    default: 0,
  },
  dailyRentalRate: {
    type: Number,
    require: true,
    min: 0,
  },
  genre: {
    type: new mongoose.Schema({
      name: {
        type: String,
        require: true,
        trim: true,
        minlength: 3,
        maxlength: 255,
      },
    }),
    require: true,
  },
});

const Movie = mongoose.model('Movie', schema);

const joiSchema = Joi.object({
  title: Joi.string().trim().min(3).max(255).required(),
  numberInStock: Joi.number().min(0).default(0),
  dailyRentalRate: Joi.number().min(0).required(),
  genre: Joi.objectId().required(),
});

function validate(movie) {
  return joiSchema.validate(movie);
}

export default Movie;
export { validate };
