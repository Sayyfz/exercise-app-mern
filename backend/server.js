import express from 'express';
import workoutRoutes from './routes/workouts.js';
import mongoose from 'mongoose';
//loads the .env file variables into the process.env object
import dotenv from 'dotenv'; 

const app = express();

dotenv.config(); // this is the method that attaches the .env variables to process.env
const port = process.env.PORT || 5000;

//midlewares
app.use(express.json()); // It looks if there is any json data sent in https requests and it attches it to req object
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/workouts', workoutRoutes);

// Mongo Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        
        app.listen(port, () => {
            console.log(`Listening on port: ${port}`);
        });
    }).catch(error => console.log(error));

