import express from 'express'
import { addProduct, deleteProductById, editProduct, getAllProducts, getProductById } from '../controllers/product-controllers.js';
import { upload } from '../middilware/middilware.js';

const productRouter = express.Router();

productRouter.post('/',upload.single('image'), addProduct);
productRouter.put('/:id',upload.single('image'),editProduct)
productRouter.get('/',getAllProducts)
productRouter.get('/:id',getProductById)
productRouter.delete('/:id',deleteProductById)

export default productRouter;