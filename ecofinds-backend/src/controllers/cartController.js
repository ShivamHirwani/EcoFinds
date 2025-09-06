const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function addToCart(req, res) {
  const { userId, productId, quantity } = req.body;
  try {
    const item = await prisma.cartItem.create({
      data: { userId, productId, quantity },
    });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getCart(req, res) {
  const { userId } = req.params;
  const items = await prisma.cartItem.findMany({
    where: { userId: parseInt(userId) },
    include: { product: true },
  });
  res.json(items);
}

async function removeFromCart(req, res) {
  const { id } = req.params;
  try {
    await prisma.cartItem.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Removed from cart" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { addToCart, getCart, removeFromCart };
