import Login from "../models/Login";
import User from "../models/User";
import Product from "../models/Product";

const models = {
  logins: new Login("logins"),
  users: new User("users"),
  products: new Product("products"),
};

export default models;
