import { Request, Response, NextFunction } from "express";
import Condition from "../models/base/Condition";
import User from "../models/User";

// @desc   Get all from Model
// @route  GET /api/v1/users
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const model = new User(undefined);
  await model.read();
  return res.status(200).send(model.response);
};

// @desc   Get a Model
// @route  GET /api/v1/users/:id
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const condition = new Condition({ where: { id: req.params.id } });
  const model = new User(req.body);
  await model.read(condition);
  return res.status(200).send(model.response);
};

// @desc   Register/Create a Model - using bcrypt hashed passwords
// @route  POST /api/v1/register
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("User received :", req.body.user);
  const model = new User(req.body);
  (await model.validate()) && (await model.create());
  return res.status(201).send(model.response);
};

// @desc   Update a Model
// @route  UPDATE /api/v1/user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const condition = new Condition({ where: { id: req.params.id } });
  const model = new User(req.body);
  (await model.validate()) && (await model.update(condition));
  return res.status(200).send(model.response);
};

// @desc   Delete Model
// @route  DELETE /api/v1/user
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Deleting record from users with id ", req.params.id);
  const model = new User(req.body);
  const condition = new Condition({ where: { id: req.params.id } });
  await model.delete(condition);
  return res.status(200).send(model.response);
};
