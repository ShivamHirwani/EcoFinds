
const express = require("express");
const router = express.Router();
const { addToCart, getCart, removeFromCart } = require("../controllers/cartController");

router.post("/", addToCart);          // Add item to cart
router.get("/:userId", getCart);      // Get all items for user
router.delete("/:id", removeFromCart); // Remove item from cart

module.exports = router;
