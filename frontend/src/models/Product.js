import ActiveRecord from "./base/ActiveRecord";
import { apiServer } from "../common/constants";

class Product extends ActiveRecord {
  constructor(name) {
    super(name);
    this._form = {
      id: "",
      name: "",
      attributes: [],
    };
    this.server = `${apiServer}/graphql?`;
  }

  rules() {
    return {
      id: "required",
      name: "required",
    };
  }

  messages(type) {
    switch (type) {
      case this.types.create_success:
        return [{ type: "success", msg: "Created product successfully" }];
      case this.types.read_success:
        return [{ type: "info", msg: "Read all products successfully" }];
      case this.types.update_success:
        return [{ type: "warning", msg: "Updated product successfully" }];
      case this.types.delete_success:
        return [{ type: "error", msg: "Deleted product successfully" }];
      default:
        return [{ type: "success", msg: "Product success" }];
    }
  }
}

export default Product;
