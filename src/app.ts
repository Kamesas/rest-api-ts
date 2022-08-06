import express, { Express, Request, Response, Router } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app: Express = express();
app.use(express.json());

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

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`running on port - ${port}`);
});
