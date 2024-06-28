import express from 'express';
import { deleteUserAccount, getAllUsers, userLogin, userSignup } from '../controllers/user-controllers.js';
import { verifyToken } from '../middilware/middilware.js';

const userRouter = express.Router();

userRouter.post('/', userSignup);
userRouter.post('/login', userLogin);
userRouter.delete('/:id', deleteUserAccount);
userRouter.get('/',verifyToken, getAllUsers);
export default userRouter;