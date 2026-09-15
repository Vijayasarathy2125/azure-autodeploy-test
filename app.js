const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Version 2.0 Automatically deployed with GitHub Actions!");
});

module.exports = app;