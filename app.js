const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const dashboardRoutes = require("./routes/dashboardRoutes");

app.use("/dashboard", dashboardRoutes);

// routes
const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");

app.use("/users", userRoutes);
app.use("/records", recordRoutes);

// test route
app.get("/", (req, res) => {
    res.send("server running");
});

module.exports = app;
