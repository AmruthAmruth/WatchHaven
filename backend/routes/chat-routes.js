import express from 'express'
import { chat } from '../controllers/chat-controllers.js';
const chatRouter = express.Router();

chatRouter.post('/',chat );

export default chatRouter;