import { AttributeT } from "../../types";
import Attribute from "./Attribute";

class Attributes {
  private attributes: AttributeT[] = [];

  constructor(private attributesJson: any, private attributesMetaJson: any) {}

  public all(): AttributeT[] {
    this.make();
    return this.attributes;
  }

  private make() {
    for (let key in this.attributesJson) {
      const values = this.attributesJson[key]
        .split(",")
        .map((code: string) => code.trim());

      values.forEach((value: string) =>
        this.attributes.push(
          new Attribute(this.attributesMetaJson, key, value).all()
        )
      );
    }
  }
}

export default Attributes;
