const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  points: Joi.number()
});

const userUpdateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  id: Joi.number().required(),
  points: Joi.number()
});

module.exports = {
  userSchema,
  userUpdateSchema
};
