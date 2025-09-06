import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../models/productModel.js";

// Create
export const addProduct = async (req, res) => {
  try {
    const { title, description, category, price, imageUrl } = req.body;
    const ownerId = req.user.id; // from JWT middleware
    const product = await createProduct(ownerId, title, description, category, price, imageUrl);
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "Error creating product" });
  }
};

// Read all

export const getAllProducts = async (req, res) => {
  try {
    const { search, category } = req.query;
    const products = await getProducts(search, category);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Error fetching products" });
  }
};


// Read single
export const getProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Error fetching product" });
  }
};

// Update
export const editProduct = async (req, res) => {
  try {
    const { title, description, category, price, imageUrl } = req.body;
    const product = await updateProduct(
      req.params.id, title, description, category, price, imageUrl
    );
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Error updating product" });
  }
};

// Delete
export const removeProduct = async (req, res) => {
  try {
    await deleteProduct(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting product" });
  }
};

