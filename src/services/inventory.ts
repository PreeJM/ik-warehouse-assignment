import inventoryJson from "../dataFiles/inventory-1.json";

function createArticle(article: any): Article {
  return {
    name: article.name,
    id: article.art_id,
    stock: Number(article.stock),
  };
}

export function listInventory(): Map<string, Article> {
  return inventoryJson.inventory.reduce(
    (current, article) => current.set(article.art_id, createArticle(article)),
    new Map<string, Article>()
  );
}
