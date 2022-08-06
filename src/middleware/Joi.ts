import Joi, { ObjectSchema } from 'joi';
import { NextFunction, Request, Response } from 'express';
import { IWorkout } from '../model/Workout';

export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);

      next();
    } catch (error) {
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  workout: {
    create: Joi.object<IWorkout>({
      name: Joi.string().required()
    })
  }
};
