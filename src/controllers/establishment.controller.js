const { response } = require("../app");
const establishmentBusiness = require("../business/establishment.business");
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
        resp.sendStatus(201);
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
        resp.sendStatus(204);
    } catch(e) {
        next(e);
    }
}

exports.deleteEstablishment = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        await establishmentBusiness.deleteEstablishment(id);
        resp.sendStatus(204);
    } catch(e) {
        next(e);
    }
}