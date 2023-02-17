const express = require("express");
const usersRoutes = require("./user.route");
const router = express.Router();

module.exports = router;

router.use("/users", usersRoutes);
