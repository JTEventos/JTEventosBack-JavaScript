const { response } = require("../app");
const customerBusiness = require("../business/customer.business");
const customerRepository = require("../repository/customer.repository");
const { validationResult } = require("express-validator");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await customerBusiness.findAll();
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.findById = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await customerBusiness.findById(req.query.id);
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.findByName = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await customerBusiness.findByName(req.query.name);
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.findByCpf = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await customerBusiness.findById(req.query.cpf);
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.createCustomer = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber } = req.body;
        await customerBusiness.createCustomer(name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
        resp.sendStatus(201);
    } catch(e) {
        next(e);
    }
}

exports.updateCustomer = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber } = req.body;
        const customer = await customerRepository.findOne(id);

        if (customer === 1) {
            await customerBusiness.updateCustomer(id, name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
            resp.sendStatus(204);
        } else {
            resp.sendStatus(404);
        }
    } catch(e) {
        next(e);
    }
}

exports.deleteCustomer = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const customer = await customerRepository.findOne(id);

        if (customer === 1) {
            await customerBusiness.deleteCustomer(id);
            resp.sendStatus(204);
        } else {
            resp.sendStatus(404);
        }
    } catch(e) {
        next(e);
    }
}