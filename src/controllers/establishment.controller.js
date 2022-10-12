const { response } = require("../app");
const establishmentBusiness = require("../business/establishment.business");
const { created, deleted, updated } = require("./utils/return-message");
const { validationResult } = require("express-validator");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await establishmentBusiness.findAll();
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.createEstablishment = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { description, cep, street, streetNumber, streetComplement, neighborhood, city, state } = req.body;
        await establishmentBusiness.createEstablishment(description, cep, street, streetNumber, streetComplement, neighborhood, city, state);
        resp.status(201).json(created("Estabelecimento"));
    } catch(e) {
        next(e);
    }
}

exports.updateEstablishment = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { description, cep, street, streetNumber, streetComplement, neighborhood, city, state } = req.body;
        await establishmentBusiness.updateEstablishment(id, description, cep, street, streetNumber, streetComplement, neighborhood, city, state);
        resp.status(200).json(updated("Estabelecimento"));
    } catch(e) {
        next(e);
    }
}

exports.deleteEstablishment = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        await establishmentBusiness.deleteEstablishment(id);
        resp.status(200).json(deleted("Estabelecimento"));
    } catch(e) {
        next(e);
    }
}