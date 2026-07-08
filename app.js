const express = require('express');
const { db } = require("./models") 
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok"});
});

db.sync().then(() => {
    app.listen(3000, () => {
        console.log("Server running on Port 3000");
    });
});








