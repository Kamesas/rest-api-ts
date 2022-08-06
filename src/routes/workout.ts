import express from 'express';
import controller from '../controllers/Workout';
import { Schemas, ValidateJoi } from '../middleware/Joi';

const router = express.Router();

router.post('/create', ValidateJoi(Schemas.workout.create), controller.createWorkout);
// router.get('/get/:authorId', controller.readAuthor);
router.get('/', controller.getAll);
// router.patch('/update/:authorId', ValidateJoi(Schemas.author.update), controller.updateAuthor);
// router.delete('/delete/:authorId', controller.deleteAuthor);

export = router;
