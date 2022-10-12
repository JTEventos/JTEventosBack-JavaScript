const { response } = require("../app");
const eventBusiness = require("../business/event.business");
const { validationResult } = require("express-validator");
const { created, updated, deleted, noData } = require("./utils/return-message");

exports.findAll = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const result = await eventBusiness.findAll();
        resp.json(result);
    } catch (error) {
        next(error);
    }
}

exports.findById = async(req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const result = await eventBusiness.findById(id);
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
        resp.status(201).json(created("Evento"));
    } catch(e) {
        next(e);
    }
}

exports.updateEvent = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        const { eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList } = req.body;
        await eventBusiness.updateEvent(id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
        resp.status(200).json(updated("Evento"));
    } catch(e) {
        next(e);
    }
}

exports.deleteEvent = async (req, resp, next) => {
    try {
        validationResult(req).throw()
        const { id } = req.params;
        await eventBusiness.deleteEvent(id);
        resp.status(200).json(deleted("Evento"));
    } catch(e) {
        next(e);
    }
}