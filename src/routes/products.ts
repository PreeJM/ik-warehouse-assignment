import express from "express";
import {
  getAllProducts,
  getAvailabilityOfProduct,
} from "../controllers/products";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:productName", getAvailabilityOfProduct);

export default router;
