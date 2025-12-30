const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Node.js service");
});

app.get("/health", (req, res) => {
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Node service running on port 3000");
});