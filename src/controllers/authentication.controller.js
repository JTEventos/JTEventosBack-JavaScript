const { response } = require("../app");
const { sign } = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { invalidAuth } = require("./utils/return-message");
const User = require("../models/user.model");

exports.login = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { username, password } = req.body;
        
        User.findOne({ username: username }, async (e, login) => {
            if (login && login.password == password) {
                const token = await sign({ username: username }, process.env.SECRET, { expiresIn: 300 });
                resp.status(201).json({ id: login._id, username: login.username, token: token });
            } else {
                resp.status(401).json(invalidAuth());
            }
        });
    } catch(e) {
        next(e);
    }
}