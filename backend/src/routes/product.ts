import express from "express";
import { products } from "../controllers/product";

const router = express.Router();

router.route("/:page/:page_size").get(products);
router.route("*").get(products);

export default router;
