const express = require("express");
const router = express.Router();

const {
    getSummary,
    getCategorySummary,
    getMonthlyData
} = require("../controllers/dashboardController");

const allowRoles = require("../middleware/roleMiddleware");

// both admin & analyst can view dashboard
router.get("/summary", allowRoles("admin", "analyst"), getSummary);
router.get("/category", allowRoles("admin", "analyst"), getCategorySummary);
router.get("/monthly", allowRoles("admin", "analyst"), getMonthlyData);

module.exports = router;