import { Request, Response, NextFunction } from "express";
import Condition from "../models/base/Condition";
import { getProducts } from "../common/products";

// @desc   Get all from Model
// @route  GET /api/v1/users
export const products = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let args = {};
  let { page, page_size } = req.params;
  if (page && page_size) {
    args = { page, page_size };
  } else if (req.query.page && req.query.page_size) {
    args = { page: req.query.page, page_size: req.query.page_size };
  }

  const products = await getProducts(args);
  return res.status(200).send(products);
};
