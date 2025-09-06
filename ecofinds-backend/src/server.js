const express = require("express");
const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
