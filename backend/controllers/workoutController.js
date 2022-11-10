import Workout from '../models/workoutModel.js';
import mongoose from 'mongoose';

export const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
};

export const getWorkoutById = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'id is not valid' });
    };

    const workout = await Workout.findById(id);

    if(!workout) {
        return res.status(404).json({ error: 'No Such Workout' });
    };

    res.status(200).json(workout);
};

export const createWorkout = async (req, res) => {
    
    try {
        // try to create the workout document based on the passed data 
        const workout = await Workout.create(req.body);
        res.status(200).json(workout);
    } catch(error) {
        res.status(400).json({ error: error.message });
    };
};

export const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'id is not valid' });
    };

    const workout = await Workout.findOneAndDelete({ _id: id });

    if(!workout) {
        return res.status(404).json({ error: 'No such workout' });
    };

    res.status(200).json(workout);
};

export const updateWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'ID is not valid'});
    };

    const workout = await Workout.findByIdAndUpdate(id, req.body);

    if(!workout) {
        return res.status(404).json({ error: 'No such workout' });
    }
    res.status(200).json(workout);
};


