const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all products
async function getAllProducts(req, res) {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get product by ID
async function getProductById(req, res) {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: "Product ID is required" });

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
}

// Search products by keyword in title
async function searchProducts(req, res) {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: "Query is required" });

  const products = await prisma.product.findMany({
    where: {
      title: {
        contains: q,
        mode: "insensitive",
      },
    },
  });
  res.json(products);
}

// Filter products by category
async function filterProducts(req, res) {
  const { category } = req.query;
  if (!category) return res.status(400).json({ error: "Category is required" });

  const products = await prisma.product.findMany({
    where: { category: category },
  });
  res.json(products);
}
module.exports = {
  getAllProducts,
  getProductById,
  searchProducts,
  filterProducts,
};
