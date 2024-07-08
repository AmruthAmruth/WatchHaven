import express from 'express'
import { createOrder } from '../controllers/order-controllers.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
export default orderRouter;