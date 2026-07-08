const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true},
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { len: [8, 100] },
    },
});

module.exports = User;
