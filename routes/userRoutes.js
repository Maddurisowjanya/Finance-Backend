const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/userController");
const allowRoles = require("../middleware/roleMiddleware");

// only admin can create user
router.post("/create", allowRoles("admin"), createUser);

module.exports = router;