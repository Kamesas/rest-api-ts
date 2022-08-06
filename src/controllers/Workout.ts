import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Workout from '../model/Workout';

const createWorkout = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  const workout = new Workout({
    _id: new mongoose.Types.ObjectId(),
    name
  });

  return workout
    .save()
    .then((workout) => res.status(201).json({ workout }))
    .catch((error) => res.status(500).json({ error }));
};

const getAll = (req: Request, res: Response, next: NextFunction) => {
  return Workout.find()
    .then((workout) => res.status(200).json({ workout }))
    .catch((error) => res.status(500).json({ error }));
};

export default { createWorkout, getAll };
