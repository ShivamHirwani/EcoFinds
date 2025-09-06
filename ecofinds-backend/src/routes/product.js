const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  searchProducts,
  filterProducts,
} = require("../controllers/productController");

// Search & filter routes first
router.get("/search", searchProducts);       // ?q=keyword
router.get("/filter", filterProducts);       // ?category=Electronics

// CRUD routes
router.get("/", getAllProducts);
router.get("/:id", getProductById);          // dynamic route LAST

module.exports = router;
