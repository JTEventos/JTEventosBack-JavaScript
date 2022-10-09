const { Result } = require("express-validator");
const eventRepository = require("../repository/event.repository");
const eventValidators = require("./validators/event.validator");

exports.findAll = async (query) => {
    const events = await eventRepository.findAll(query);
    return events;
}

exports.createEventType = async (eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    eventValidators.validateFields(eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
    await eventRepository.createEvent(eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
}

exports.updateEventType = async (id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    eventValidators.validateStatusNotEmpty(eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
    await eventRepository.updateEvent(id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
}

exports.deleteEventType = async (id) => {
    await eventRepository.deleteEvent(id);
}
