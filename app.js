const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Version 3.0 Modified for Testing!");
});

module.exports = app;