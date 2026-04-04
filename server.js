const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

const recordRoutes = require("./routes/recordRoutes");

app.use("/api/records", recordRoutes);

app.get("/", (req, res) => {
    res.send("Finance Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});