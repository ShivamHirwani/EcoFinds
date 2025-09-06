const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  filterProducts,
} = require("../controllers/productController");

router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/search", searchProducts);
router.get("/filter", filterProducts);

module.exports = router;
