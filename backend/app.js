import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000






mongoose.connect(`mongodb+srv://amruthshyju:${process.env.MONGODB_PASSWORD}@cluster0.i8yx2tw.mongodb.net/?retryWrites=true&w=majority&appName=WatchHaven`)
  .then(()=>{
    app.listen(PORT,(err)=>{
            if(!err){
                console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
            }else{
                console.log("Error occurred, server can't start", error);
            }
    })
  })


 
