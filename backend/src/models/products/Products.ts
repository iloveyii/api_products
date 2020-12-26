import Product from "./Product";
import { attributes_meta, products } from "./mock";
import { ProductT } from "../../types";

class Products {
  private products: ProductT[] = [];

  constructor(private productsJson: any, private attributesMetaJson: any) {}

  public all(): ProductT[] {
    this.productsJson.forEach((productJson: any) => {
      this.products.push(
        new Product(productJson, this.attributesMetaJson).all()
      );
    });
    return this.products;
  }
}

export default Products;
