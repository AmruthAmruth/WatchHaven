import express from 'express'
import { adminLogin, adminSigup } from '../controllers/admin-controllers.js';

const adminRouter = express.Router();

adminRouter.post('/', adminSigup);
adminRouter.post('/login', adminLogin);
export default adminRouter;