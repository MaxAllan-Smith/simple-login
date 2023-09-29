import express from "express";
import mongoose from 'mongoose';
import { json } from "body-parser";
import { userRouter } from './routes/user';

const app = express();
app.use(json());
app.use('/user', userRouter);

mongoose.connect('mongodb://localhost:27017/simple-login', {
})
.then(() => {
    console.log('connected to database');
})
.catch(err => {
    console.error('Error connecting to database:', err);
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
});