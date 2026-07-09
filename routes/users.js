const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/", async (req, res) => {
    const { email } = req.body;

    if (email) {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "No user with that email found." });
        }

        return res.json(user);
    }

    const users = await User.findAll();
    return res.json(users);
});

module.exports = router;