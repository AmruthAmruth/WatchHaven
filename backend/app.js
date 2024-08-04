import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import userRouted from './routes/user-routes.js';
import adminRouter from './routes/admin-routes.js';
import productRouter from './routes/product-routes.js';
import reviewRoutes from './routes/review-routes.js';
import orderRouter from './routes/order-routes.js';
import chatRouter from './routes/chat-routes.js';

// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/user', userRouted);
app.use('/admin', adminRouter);
app.use('/product', productRouter);
app.use('/review', reviewRoutes);
app.use('/order', orderRouter);
app.use('/chat', chatRouter);

mongoose.connect(`mongodb+srv://amruthshyju:${process.env.MONGODB_PASSWORD}@cluster0.i8yx2tw.mongodb.net/?retryWrites=true&w=majority&appName=WatchHaven`)
  .then(() => {
    app.listen(PORT, (err) => {
      if (!err) {
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
      } else {
        console.log("Error occurred, server can't start", err);
      }
    });
  })
  .catch(err => {
    console.error("Error connecting to MongoDB", err);
  });
