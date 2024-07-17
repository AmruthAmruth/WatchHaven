import express from 'express'
import { chat } from '../controllers/chat-controllers.js';
const chatRouter = express.Router();

chatRouter.post('/authenticate',chat );

export default chatRouter;