const { response } = require("../app");
const userBusiness = require("../business/user.business");
const userRepository = require("../repository/user.repository");
const { validationResult } = require("express-validator");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await userBusiness.findAll();
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.findById = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await userBusiness.findById(req.query.id);
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.createUser = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { username, password } = req.body;
        await userBusiness.createUser(username, password);
        resp.sendStatus(201);
    } catch(e) {
        next(e);
    }
}

exports.updateUser = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { username, password } = req.body;
        const user = await userRepository.findOne(id);

        if (user === 1) {
            await userBusiness.updateUser(id, username, password);
            resp.sendStatus(204);
        } else {
            resp.sendStatus(404);
        }
    } catch(e) {
        next(e);
    }
}
