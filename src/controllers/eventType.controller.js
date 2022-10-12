const { response } = require("../app");
const eventTypeBusiness = require("../business/eventType.business");
const { validationResult } = require("express-validator");
const { created, updated, deleted } = require("./utils/return-message");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await eventTypeBusiness.findAll();
        resp.json(result);
    } catch (e) {
        next(e);
    }
}

exports.createEventType = async (req, resp, next) => {
    try {
        validationResult(req).throw()   
        await eventTypeBusiness.createEventType(req.body);
        resp.status(201).json(created("Tipo de Evento"));
    } catch (e) {
        next(e);
    }
}

exports.updateEventType = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { description } = req.body;
        await eventTypeBusiness.updateEventType(id, description);
        resp.status(200).json(updated("Tipo de Evento"));
    } catch (e) {
        next(e);
    }
}

exports.deleteEventType = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        await eventTypeBusiness.deleteEventType(id);
        resp.status(200).json(deleted("Tipo de Evento"));
    } catch (e) {
        next(e);
    }
}