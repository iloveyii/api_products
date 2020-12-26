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
  if (args.id)
    products = products.filter((product: any) => product.id === args.id);

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
      },
      resolve: async (root, args, context, info) => await getProducts(args),
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
