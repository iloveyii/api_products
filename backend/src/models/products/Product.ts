import { ProductT, AttributeT } from "../../types";
import Attributes from "./Attributes";
import { attributes_meta } from "./mock";

class Product {
  private product: ProductT = { id: "", name: "", attributes: [] };

  constructor(private productJson: any, private attributesMetaJson: any) {}

  public all(): ProductT {
    this.product = {
      id: this.productJson.id,
      name: this.productJson.name,
      attributes: new Attributes(
        this.productJson.attributes,
        this.attributesMetaJson
      ).all(),
    };

    return this.product;
  }
}

export default Product;
