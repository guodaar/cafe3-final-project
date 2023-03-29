const Joi = require('@hapi/joi');

const registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(data);
  return { error, value };
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  });
  const { error, value } = schema.validate(data);
  return { error, value };
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
