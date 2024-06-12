import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import dotenv from 'dotenv';
dotenv.config();



mongoose.connect(process.env.MONGO).then(()=> {
    console.log("Server is connected brooo");
})
.catch((err)=>{
    console.log(err);
});

const app=express();


app.listen(3000,()=>{
    console.log('Server is running on 3000');
});

app.use('/api/user', userRouter);
