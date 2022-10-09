const { response } = require("../app");
const eventBusiness = require("../business/event.business");
const eventRepository = require("../repository/event.repository");
const { validationResult } = require("express-validator");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await eventBusiness.findAll();
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.createEvent = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList } = req.body;
        await eventBusiness.createEvent(eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
        resp.sendStatus(201);
    } catch(e) {
        next(e);
    }
}

exports.updateEvent = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList } = req.body;
        const event = await eventRepository.findOne(id);

        if (event === 1) {
            await eventBusiness.updateEvent(id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
            resp.sendStatus(204);
        } else {
            resp.sendStatus(404);
        }
    } catch(e) {
        next(e);
    }
}

exports.deleteEvent = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const event = await eventRepository.findOne(id);

        if (event === 1) {
            await eventBusiness.deleteEvent(id);
            resp.sendStatus(204);
        } else {
            resp.sendStatus(404);
        }
    } catch(e) {
        next(e);
    }
}