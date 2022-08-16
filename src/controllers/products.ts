import { Request, Response } from "express";
import {
  listAllProductsAndQuantities,
  canProductBeSold,
} from "../services/products";

/* Display all products and their available quantities. */
export function getAllProducts(req: Request, res: Response) {
  const products = listAllProductsAndQuantities();
  const obj = Object.fromEntries(products);
  res.status(200).json(obj);
}

/* Check and display whether a particular product is available for sale. */
export function getAvailabilityOfProduct(req: Request, res: Response) {
  const productName = req.params.productName;
  const products = listAllProductsAndQuantities();
  if (!products.get(productName)) {
    const message: string = `${productName} does not exist in the warehouse.`;
    return res.status(400).json({ productName, message });
  }
  const isProductAvailable = canProductBeSold(productName, products);

  const message: string = `${productName} is ${
    isProductAvailable ? "" : "not"
  } available in the warehouse for sale.`;

  return res.status(200).json({
    productName,
    message,
  });
}
