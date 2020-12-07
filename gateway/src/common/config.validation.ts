import * as Joi from 'joi';

export const configSchema: Joi.ObjectSchema = Joi.object({
	NODE_ENV: Joi.string().valid('development', 'production', 'stage').default('development').required(),
	APP_PORT: Joi.number().default(3011).required(),
	APP_HOST: Joi.string().default('0.0.0.0').required(),
	USER_SERVICE_HOST: Joi.string().default('0.0.0.0').required(),
	USER_SERVICE_PORT: Joi.number().default(3011).required()
});
