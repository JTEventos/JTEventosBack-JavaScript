const { response } = require("../app");
const eventTypeBusiness = require("../business/eventType.business");
const { validationResult } = require("express-validator");

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
        resp.sendStatus(201);
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
        resp.sendStatus(204);
    } catch (e) {
        next(e);
    }
}

exports.deleteEventType = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        await eventTypeBusiness.deleteEventType(id);
        resp.sendStatus(204);
    } catch (e) {
        next(e);
    }
}