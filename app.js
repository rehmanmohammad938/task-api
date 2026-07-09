const express = require('express');
const { db } = require("./models") 
const app = express();
const taskRouter = require("./routes/tasks");
const usersRouter = require("./routes/users");

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok"});
});

app.use("/api/tasks", taskRouter);

db.sync().then(() => {
    app.listen(3000, () => {
        console.log("Server running on Port 3000");
    });
});

app.use("/api/users", usersRouter);








