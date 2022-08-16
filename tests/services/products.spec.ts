import { listInventory } from "../../src/services/inventory";
import {
  getAllProducts,
  listAllProductsAndQuantities,
} from "../../src/services/products";


const productList = [
    {name: 'Table Lamp', containArticles: [{articleId: '1', amountOf: 1 }, {articleId: '2', amountOf: 1}]},
    {name: 'Floor Lamp', containArticles: [{articleId: '1', amountOf: 1 }, {articleId: '3', amountOf: 1}, {articleId: '4', amountOf: 1}]}
]

const inventoryMap = {1: {name: 'lamp shade', id: '1', 'stock': 10}, 2: {name: 'lamp base', id: '1', 'stock': 0}, 3: {name: 'lamp base', id: '1', 'stock': 0}}

describe("listAllProductsAndQuantities", (): void => {

    it("returns 2 chairs and 1 table given the inventory contains 12 legs, 17 screws, 2 seats and 1 table top", (): void => {
      const actual = listAllProductsAndQuantities(
        getAllProducts(),
        listInventory()
      );
      expect(actual.get("Dining Chair")).toBe(2);
    });

});
