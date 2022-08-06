import mongoose, { Document, Schema } from 'mongoose';

export interface IWorkout {
  name: string;
}

export interface IWorkoutModel extends IWorkout, Document {}

const WorkoutSchema: Schema = new Schema(
  {
    name: { type: String, required: true }
  },
  {
    versionKey: false
  }
);

export default mongoose.model<IWorkoutModel>('Workout', WorkoutSchema);
