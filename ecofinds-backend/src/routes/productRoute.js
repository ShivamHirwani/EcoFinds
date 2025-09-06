import express from "express";
import {
  addProduct,
  getAllProducts,
  getProduct,
  editProduct,
  removeProduct,
} from "../controllers/productController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public
router.get("/", getAllProducts);
router.get("/:id", getProduct);

// Protected
router.post("/", verifyToken, addProduct);
router.put("/:id", verifyToken, editProduct);
router.delete("/:id", verifyToken, removeProduct);

export default router;

