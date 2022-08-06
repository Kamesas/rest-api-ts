import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workout';
import 'dotenv/config';

const app: Express = express();

const connectDB = async () => {
  try {
    const url = process.env?.MONGO_DB_URI || ''; // prettier-ignore
    await mongoose.connect(url);
    console.log('DB connected!');
  } catch (error) {
    console.log('DB connect failure!', error);
  }
};

connectDB();

app.use(express.json());

/** Routes */
app.use('/workout', workoutRoutes);

app.route('/users').get((req: Request, res: Response) => {
  console.log('db', connectDB);

  return res.json({
    name: 'Alex'
  });
});

app
  .route('/user')
  .get((req: Request, res: Response) => {
    return res.json({
      name: 'Alex'
    });
  })
  .post((req: Request, res: Response) => {
    return res.json({
      ...req?.body,
      workout: {
        pushUps: 30
      }
    });
  });

/** Healthcheck */
app.get('/ping', (req, res, next) => res.status(200).json({ hello: 'world' }));

/** Error handling */
app.use((req, res, next) => {
  const error = new Error('Not found');

  console.log('error', error);

  res.status(404).json({
    message: error.message
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`running on port - ${port}`);
});
