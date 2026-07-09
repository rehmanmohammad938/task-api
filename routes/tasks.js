const express = require("express");
const router = express.Router();
const { Task } = require("../models");

router.get("/", async (req, res) => {
    const tasks = await Task.findAll();
    res.json(tasks);
});

router.get("/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
        return res.status(404).json({error: "Task not found"});
    }  
    res.json(task);
});

router.post("/", async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
});

router.patch("/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }
    await task.update(req.body);
    res.json(task);
});

router.delete("/:id", async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (!task) {
        return res.status(404).json({ error: "Task not found"});
    }
    await task.destroy();
    res.sendStatus(204);
});

module.exports = router;
