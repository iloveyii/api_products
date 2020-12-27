import dotenv from "dotenv";
import axios from "axios";
import Products from "../models/products/Products";

// ----------------------------------
// Environment setup
// ----------------------------------
dotenv.config({ path: ".env" });
const { REMOTE_API_URL = "http://draft.grebban.com/backend/" } = process.env;

// ----------------------------------
// API Url
// ----------------------------------
const apiUrl = (endPoint: string) => {
  if (endPoint == "products") {
    return `${REMOTE_API_URL}/products.json`;
  }
  if (endPoint == "attributes") {
    return `${REMOTE_API_URL}/attribute_meta.json`;
  }
  return "";
};

// ----------------------------------
// Get Attribute Meta from API
// ----------------------------------
const getAttributeMeta = async () => {
  const data = await axios
    .get(apiUrl("attributes"))
    .then(async (res: any) => res.data);
  return data;
};

export const randomBetween = (first: number, second: number) =>
  Math.floor(Math.random() * second) + first;

// Pagination
const pagination = (page: number, pageSize: number, data: any) => {
  return data.slice((page - 1) * pageSize, page * pageSize);
};

// ----------------------------------
// Get Products from API
// ----------------------------------
export const getProducts = async (args: any) => {
  const attributeMetaJson = await getAttributeMeta();
  const productsJson = await axios
    .get(apiUrl("products"))
    .then(async (res: any) => res.data);

  const model = new Products(productsJson, attributeMetaJson);
  let products = model.all();
  // Search
  if (args.id)
    products = products.filter((product: any) => product.id === args.id);
  // Paginate
  if (args.page && args.page_size) {
    products = pagination(args.page, args.page_size, products);
  }

  return products;
};
