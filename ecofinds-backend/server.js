const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Test DB connection
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

