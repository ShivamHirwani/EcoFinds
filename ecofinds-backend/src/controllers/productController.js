const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// CRUD

async function createProduct(req, res) {
  const { title, description, category, price, image, userId } = req.body;
  try {
    const product = await prisma.product.create({
      data: { title, description, category, price, image, userId },
    });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getProductById(req, res) {
  const { id } = req.params;
  const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const data = req.body;
  try {
    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data,
    });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Search & Filter

async function searchProducts(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Query required" });
  const products = await prisma.product.findMany({
    where: { title: { contains: q, mode: "insensitive" } },
  });
  res.json(products);
}

async function filterProducts(req, res) {
  const { category } = req.query;
  if (!category) return res.status(400).json({ error: "Category required" });
  const products = await prisma.product.findMany({ where: { category } });
  res.json(products);
}

module.exports = {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  filterProducts,
};
