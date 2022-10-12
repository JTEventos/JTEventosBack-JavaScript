const { response } = require("../app");
const userBusiness = require("../business/user.business");
const { validationResult } = require("express-validator");
const { created, updated, noData } = require("./utils/return-message");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await userBusiness.findAll();
        resp.json(result);
    } catch (e) {
        next(e);
    }
}

exports.findById = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const result = await userBusiness.findById(id);
        resp.json(result);
    } catch (e) {
        next(e);
    }
}

exports.createUser = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { username, password } = req.body;
        await userBusiness.createUser(username, password);
        resp.status(201).json(created("Usuário"));
    } catch (e) {
        next(e);
    }
}

exports.updateUser = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { username, password } = req.body;
        await userBusiness.updateUser(id, username, password);
        resp.status(200).json(updated("Usuário"));
    } catch (e) {
        next(e);
    }
}
