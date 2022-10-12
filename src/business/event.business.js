const { Result } = require("express-validator");
const eventTypeRepository = require("../repository/eventType.repository");
const eventTypeValidators = require("./validators/eventType.validator");
const establishmentRepository = require("../repository/establishment.repository");
const establishmentValidators = require("./validators/establishment.validator");
const customerRepository = require("../repository/customer.repository");
const customerValidators = require("./validators/customer.validator");
const eventRepository = require("../repository/event.repository");
const eventValidators = require("./validators/event.validator");

exports.findAll = async () => {
    const events = await eventRepository.findAll();
    eventValidators.validateNotNull(events);
    return events;
}

exports.findById = async (id) => {
    const event = await eventRepository.findById(id);
    eventValidators.validateIfExists(event);
    return event;
}

exports.createEvent = async (eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    eventValidators.validateFields(eventTypeId, customerId, establishmentId, description, startDate, finishDate);
    const eventType = await eventTypeRepository.findById(eventTypeId);
    eventTypeValidators.validateIfExists(eventType);
    const establishment = await establishmentRepository.findById(establishmentId);
    establishmentValidators.validateIfExists(establishment);
    const customer = await customerRepository.findById(customerId);
    customerValidators.validateIfExists(customer);
    await eventRepository.createEvent(eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
}

exports.updateEvent = async (id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    eventValidators.validateFields(eventTypeId, customerId, establishmentId, description, startDate, finishDate);
    const event = await eventRepository.findById(id);
    eventValidators.validateIfExists(event);
    const eventType = await eventTypeRepository.findById(eventTypeId);
    eventTypeValidators.validateIfExists(eventType);
    const establishment = await establishmentRepository.findById(establishmentId);
    establishmentValidators.validateIfExists(establishment);
    const customer = await customerRepository.findById(customerId);
    customerValidators.validateIfExists(customer);
    await eventRepository.updateEvent(id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList);
}

exports.deleteEvent = async (id) => {
    const event = await eventRepository.findById(id);
    eventValidators.validateIfExists(event);
    await eventRepository.deleteEvent(id);
}
