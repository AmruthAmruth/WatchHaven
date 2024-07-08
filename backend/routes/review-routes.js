import express from 'express'
import { addReview, getAllReview } from '../controllers/review-controllers.js';

const reviewRoutes = express.Router();

reviewRoutes.post('/', addReview);
reviewRoutes.get('/',getAllReview)
export default reviewRoutes;