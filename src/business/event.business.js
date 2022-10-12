const { Result } = require("express-validator");
const eventRepository = require("../repository/event.repository");
const eventValidators = require("./validators/event.validator");

exports.findAll = async () => {
    const events = await eventRepository.findAll();
    return events;
}

exports.createEvent = async (eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    eventValidators.validateFields(eventTypeId, customerId, establishmentId, description, startDate, finishDate);
    await eventRepository.createEvent(eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
}

exports.updateEvent = async (id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    eventValidators.validateFields(eventTypeId, customerId, establishmentId, description, startDate, finishDate);
    const event = await eventRepository.checkIfExists(id);
    eventValidators.validateIfExists(event);
    await eventRepository.updateEvent(id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
}

exports.deleteEvent = async (id) => {
    const event = await eventRepository.checkIfExists(id);
    eventValidators.validateIfExists(event);
    await eventRepository.deleteEvent(id);
}
