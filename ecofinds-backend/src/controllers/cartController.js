
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Add to cart
async function addToCart(req, res) {
  const { userId, productId, quantity } = req.body;
  try {
    const cartItem = await prisma.cartItem.create({
      data: { userId, productId, quantity: quantity || 1 },
    });
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// View cart for a user
async function getCart(req, res) {
  const { userId } = req.params;
  try {
    const cart = await prisma.cartItem.findMany({
      where: { userId: parseInt(userId) },
      include: { product: true },
    });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Remove item from cart
async function removeFromCart(req, res) {
  const { id } = req.params; // cart item id
  try {
    await prisma.cartItem.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { addToCart, getCart, removeFromCart };
