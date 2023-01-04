import Joi from 'joi';

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(255).required(),
});

function validate(genre) {
  return joiSchema.validate(genre);
}

export { validate };
