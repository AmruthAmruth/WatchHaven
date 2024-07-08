import express from 'express'
import { addProduct, addToCart, decreaseQuantity, deleteProductById, editProduct, getAllProducts, getProductById, increaseQuantity, removeFromCart } from '../controllers/product-controllers.js';
import { upload } from '../middilware/middilware.js';

const productRouter = express.Router();

productRouter.post('/',upload.single('image'), addProduct);
productRouter.put('/:id',upload.single('image'),editProduct)
productRouter.get('/',getAllProducts)
productRouter.get('/:id',getProductById)
productRouter.delete('/:id',deleteProductById)
productRouter.post('/cart',addToCart)
productRouter.post('/removecart',removeFromCart)
productRouter.post('/increase',increaseQuantity)
productRouter.post('/decrease',decreaseQuantity)
export default productRouter;  