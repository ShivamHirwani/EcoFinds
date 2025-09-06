// routes/auth.js
const express = require("express");
const router = express.router();
const { registeruser, loginuser } = require("../src/controllers/authcontroller");

router.post("/register", registeruser);
router.post("/login", loginuser);

module.exports = router;

