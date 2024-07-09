import express from 'express'
import { createOrder, getAllOrders, getOrderByuserId } from '../controllers/order-controllers.js';

const orderRouter = express.Router();

orderRouter.post('/',createOrder );
orderRouter.get('/', getAllOrders);
orderRouter.get('/:id', getOrderByuserId);
export default orderRouter;