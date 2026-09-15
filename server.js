const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hi from Azure! 🚀   -- changed to hi for testing auto deployment using azure ");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});