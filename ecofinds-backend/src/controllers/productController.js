const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create
async function createProduct(req, res) {
  const { title, description, category, price, image, userId } = req.body;
  try {
    const product = await prisma.product.create({
      data: { title, description, category, price: parseFloat(price), image, userId },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Read all
async function getAllProducts(req, res) {
  const products = await prisma.product.findMany();
  res.json(products);
}

// Read one
async function getProductById(req, res) {
  const { id } = req.params;
  const product = await prisma.product.findUnique({ where: { id: parseInt(id) } });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
}

// Update
async function updateProduct(req, res) {
  const { id } = req.params;
  const { title, description, category, price, image } = req.body;
  const product = await prisma.product.update({
    where: { id: parseInt(id) },
    data: { title, description, category, price: parseFloat(price), image },
  });
  res.json(product);
}

// Delete
async function deleteProduct(req, res) {
  const { id } = req.params;
  await prisma.product.delete({ where: { id: parseInt(id) } });
  res.json({ message: "Product deleted successfully" });
}

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
