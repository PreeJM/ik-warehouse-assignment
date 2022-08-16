/* Article that is a constituent of a product */
interface ProductArticle {
  articleId: string;
  amountOf: number;
}

/* Product */
interface Product {
  name: string;
  containArticles: ProductArticle[];
}

/* Products and their available quantities */
interface ProductQuantities {
  product: Product;
  quantity: number;
}
