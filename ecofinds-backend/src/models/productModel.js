import pool from "../config/db.js";

// Create product
export const createProduct = async (ownerId, title, description, category, price, imageUrl) => {
  const result = await pool.query(
    `INSERT INTO products (owner_id, title, description, category, price, image_url) 
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [ownerId, title, description, category, price, imageUrl]
  );
  return result.rows[0];
};

// Get all products
export const getProducts = async (search = "", category = "") => {
  let query = "SELECT * FROM products WHERE 1=1";
  let values = [];

  if (search) {
    values.push(`%${search}%`);
    query += ` AND title ILIKE $${values.length}`;
  }

  if (category) {
    values.push(category);
    query += ` AND category = $${values.length}`;
  }

  query += " ORDER BY created_at DESC";

  const result = await pool.query(query, values);
  return result.rows;
};


// Get single product by ID
export const getProductById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id=$1", [id]);
  return result.rows[0];
};

// Update product
export const updateProduct = async (id, title, description, category, price, imageUrl) => {
  const result = await pool.query(
    `UPDATE products SET title=$1, description=$2, category=$3, price=$4, image_url=$5 
     WHERE id=$6 RETURNING *`,
    [title, description, category, price, imageUrl, id]
  );
  return result.rows[0];
};

// Delete product
export const deleteProduct = async (id) => {
  await pool.query("DELETE FROM products WHERE id=$1", [id]);
};

