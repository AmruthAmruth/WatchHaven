import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRouted from './routes/user-routes.js';
import adminRouter from './routes/admin-routes.js';
import productRouter from './routes/product-routes.js';
import reviewRoutes from './routes/review-routes.js';
import orderRouter from './routes/order-routes.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());

app.use('/user',userRouted)
app.use('/admin',adminRouter) 
app.use('/product',productRouter)
app.use('/review',reviewRoutes)
app.use('/order',orderRouter)


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


 
