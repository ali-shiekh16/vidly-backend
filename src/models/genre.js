import Joi from 'joi';
import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
    trim: true,
  },
});

const Genre = mongoose.model('Genre', schema);

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
});

function validate(genre) {
  return joiSchema.validate(genre);
}

export default Genre;
export { validate };
