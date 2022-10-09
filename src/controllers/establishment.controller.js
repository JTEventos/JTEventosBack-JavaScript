const { response } = require("../app");
const establishmentBusiness = require("../business/establishment.business");
const establishmentRepository = require("../repository/establishment.repository");
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
        const { name, cep, street, streetNumber, streetComplement, neighborhood, city, state } = req.body;
        await establishmentBusiness.createEstablishment(name, cep, street, streetNumber, streetComplement, neighborhood, city, state);
        resp.sendStatus(201);
    } catch(e) {
        next(e);
    }
}

exports.updateEstablishment = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { name, cep, street, streetNumber, streetComplement, neighborhood, city, state } = req.body;
        const establishment = await establishmentRepository.findOne(id);

        if (establishment === 1) {
            await establishmentBusiness.updateEstablishment(id, name, cep, street, streetNumber, streetComplement, neighborhood, city, state);
            resp.sendStatus(204);
        } else {
            resp.sendStatus(404);
        }
    } catch(e) {
        next(e);
    }
}

exports.deleteEstablishment = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const establishment = await establishmentRepository.findOne(id);

        if (establishment === 1) {
            await establishmentBusiness.deleteEstablishment(id);
            resp.sendStatus(204);
        } else {
            resp.sendStatus(404);
        }
    } catch(e) {
        next(e);
    }
}