const { response } = require("../app");
const authenticationBusiness = require("../business/authentication.business");
const { validationResult } = require("express-validator");
const { sign } = require("jsonwebtoken");

const secretKey = "S3CR3TK3YT0K3N874JWTTST";

exports.login = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { username, password } = req.body;
        await authenticationBusiness.login(username, password);    
        const token = await sign({ username: username }, secretKey, { expiresIn: 300 });
        resp.json({ username: username.id, token: token });
    } catch(e) {
        next(e);
    }
}

exports.logout = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        await authenticationBusiness.logout(req.headers["authorization"]);
        resp.sendStatus(200);
    } catch(e) {
        next(e);
    }
}