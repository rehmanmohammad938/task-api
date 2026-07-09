const express = require('express');
const { db } = require("./models") 
const app = express();
const taskRouter = require("./routes/tasks");
const usersRouter = require("./routes/users");

function logger (req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

app.use(express.json());
app.use(logger);

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

app.use((req, res) => {
    res.status(404).json({ error: "Not found"});

});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: "Something went wrong"});
});

