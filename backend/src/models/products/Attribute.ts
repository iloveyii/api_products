import { AttributeT } from "../../types";

class Attribute {
  private attribute: AttributeT = { name: "", value: "" };
  private category: any;

  constructor(
    private attributesMetaJson: any,
    private key: string,
    private value: string
  ) {}

  public all(): AttributeT {
    this.attribute = {
      name: this.getName(),
      value: this.getValue(),
    };
    return this.attribute;
  }

  private getName(): string {
    this.category = this.attributesMetaJson.find(
      (ele: any) => ele.code == this.key
    );
    return this.category && this.category.name ? this.category.name : "na";
  }
  private getValue(): string {
    const subCategory = this.category.values.find(
      (ele: any) => ele.code == this.value
    );
    return subCategory && subCategory.name ? subCategory.name : "na";
  }
}

export default Attribute;
