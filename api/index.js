import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js';
import dotenv from 'dotenv';
import userAuth from './routes/auth.route.js';
dotenv.config();



mongoose.connect(process.env.MONGO).then(()=> {
    console.log("Server is connected brooo");
})
.catch((err)=>{
    console.log(err);
});

const app=express();

app.use(express.json());


app.listen(3000,()=>{
    console.log('Server is running on 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', userAuth);

app.use((err,req,res,next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Error hai bhaiii";

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,

    });

});
