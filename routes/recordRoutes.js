const express = require("express");
const router = express.Router();

const {
    addRecord,
    getRecords,
    updateRecord,
    deleteRecord
} = require("../controllers/recordController");

const allowRoles = require("../middleware/roleMiddleware");

// admin only
router.post("/add", addRecord);

// admin + analyst
router.get("/", allowRoles("admin", "analyst"), getRecords);

// admin only
router.put("/:id", allowRoles("admin"), updateRecord);
router.delete("/:id", allowRoles("admin"), deleteRecord);

module.exports = router;