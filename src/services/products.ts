import productsJson from "../dataFiles/products-1.json";
import { listInventory } from "./inventory";

export function getAllProducts(): Product[] {
  return productsJson.products.map((product) => ({
    name: product.name,
    containArticles: product.contain_articles.map((article) => ({
      articleId: article.art_id,
      amountOf: Number(article.amount_of),
    })),
  }));
}

export function listAllProductsAndQuantities(
  productList: Product[] = getAllProducts(),
  inventoryMap: Map<string, Article> = listInventory()
): Map<string, ProductQuantities> {
  let productsAndQuantities = new Map<string, ProductQuantities>();

  productList.map((product) => {
    const listNumberOfProductsPossible: number[] = new Array();

    product.containArticles.map((article) => {
      const articleInventory = inventoryMap.get(article.articleId);

      if (articleInventory) {
        if (article.amountOf <= articleInventory.stock) {
          const numberOfProductsPossible: number =
            articleInventory.stock / article.amountOf;

          listNumberOfProductsPossible.push(numberOfProductsPossible);
        } else {
          productsAndQuantities.set(product.name, { product, quantity: 0 });
        }
      } else {
        productsAndQuantities.set(product.name, { product, quantity: 0 });
      }
    });

    if (
      !productsAndQuantities.get(product.name) &&
      listNumberOfProductsPossible.length > 0
    ) {
      productsAndQuantities.set(product.name, {
        product,
        quantity: Math.min(...listNumberOfProductsPossible),
      });
    }
  });
  return productsAndQuantities;
}

export function canProductBeSold(
  productName: string,
  productQuantityMap: Map<
    string,
    ProductQuantities
  > = listAllProductsAndQuantities()
): boolean {
  const productQuantity = productQuantityMap.get(productName)?.quantity || 0;

  return productQuantity > 0;
}
