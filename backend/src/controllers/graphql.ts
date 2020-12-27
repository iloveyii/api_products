// ----------------------------------
// Imoort packages
// ----------------------------------
import axios from "axios";
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLBoolean,
} from "graphql";
import dotenv from "dotenv";

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
const getProducts = async (args: any) => {
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

// ----------------------------------
// Get AttributeType
// ----------------------------------
const AttributeType = new GraphQLObjectType({
  name: "Attribute",
  description: "A single Attribute",
  fields: {
    name: { type: GraphQLString },
    value: { type: GraphQLString },
  },
});

// ----------------------------------
// Get ProductType
// ----------------------------------
const ProductType = new GraphQLObjectType({
  name: "Product",
  description: "A single Product",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    attributes: { type: new GraphQLList(AttributeType) },
  },
});

// ----------------------------------
// Root Query
// ----------------------------------
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    products: {
      type: new GraphQLList(ProductType),
      args: {
        id: { type: GraphQLInt },
        page: { type: GraphQLInt },
        page_size: { type: GraphQLInt },
      },
      resolve: async (root, args, context, info) => await getProducts(args),
    },
    success: {
      type: GraphQLBoolean,
      resolve: () => true,
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
