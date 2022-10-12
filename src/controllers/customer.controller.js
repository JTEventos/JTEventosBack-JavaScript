const { response } = require("../app");
const customerBusiness = require("../business/customer.business");
const { validationResult } = require("express-validator");
const { created, updated, deleted } = require("./utils/return-message");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await customerBusiness.findAll();
        resp.json(result);
    } catch (e) {
        next(e);
    }
}

exports.findById = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const result = await customerBusiness.findById(id);
        resp.json(result);
    } catch (e) {
        next(e);
    }
}

exports.createCustomer = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber } = req.body;
        await customerBusiness.createCustomer(name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
        resp.status(201).json(created("Cliente"));
    } catch (e) {
        next(e);
    }
}

exports.updateCustomer = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber } = req.body;
        await customerBusiness.updateCustomer(id, name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
        resp.status(200).json(updated("Cliente"));
    } catch (e) {
        next(e);
    }
}

exports.deleteCustomer = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        await customerBusiness.deleteCustomer(id);
        resp.status(200).json(deleted("Cliente"));
    } catch (e) {
        next(e);
    }
}