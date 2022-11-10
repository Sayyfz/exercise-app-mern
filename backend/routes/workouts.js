import express from 'express';
import { createWorkout, deleteWorkout, getAllWorkouts, getWorkoutById, updateWorkout } from '../controllers/workoutController.js';
const router = express.Router();

// GET all workouts
router.get('/', getAllWorkouts);
// GET a single workout
router.get('/:id', getWorkoutById);
// POST a new workout
router.post('/', createWorkout);
// DELETE a workout
router.delete('/:id', deleteWorkout);
// UPDATE a workout
router.patch('/:id', updateWorkout);

export default router;

