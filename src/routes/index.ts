import express from "express";
import productRoutes from './products';


const router = express.Router();
router.use('/products', productRoutes)


export default router

