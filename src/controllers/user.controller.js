const { response } = require("../app");
const userBusiness = require("../business/user.business");
const { validationResult } = require("express-validator");
const { created, updated, deleted } = require("./utils/return-message");

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
        const { name, username, password, role } = req.body;
        await userBusiness.createUser(name, username, password, role);
        resp.status(201).json(created("Usuário"));
    } catch (e) {
        next(e);
    }
}

exports.updateUser = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { name, username, password, role } = req.body;
        await userBusiness.updateUser(id, name, username, password, role);
        resp.status(200).json(updated("Usuário"));
    } catch (e) {
        next(e);
    }
}

exports.deleteUser = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        await userBusiness.deleteUser(id);
        resp.status(200).json(deleted("Usuário"));
    } catch (e) {
        next(e);
    }
}