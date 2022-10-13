const { Result } = require("express-validator");
const eventTypeRepository = require("../repository/eventType.repository");
const eventTypeValidators = require("./validators/eventType.validator");
const establishmentRepository = require("../repository/establishment.repository");
const establishmentValidators = require("./validators/establishment.validator");
const customerRepository = require("../repository/customer.repository");
const customerValidators = require("./validators/customer.validator");
const eventRepository = require("../repository/event.repository");
const eventValidators = require("./validators/event.validator");
const dateFormat = require("./utils/date-format");

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
    const startDateFormated = dateFormat(startDate);
    const finishDateFormated = dateFormat(finishDate);

    eventValidators.validateFields(eventTypeId, customerId, establishmentId, description, startDateFormated, finishDateFormated);
    const eventType = await eventTypeRepository.findById(eventTypeId);
    eventTypeValidators.validateIfExists(eventType);
    const establishment = await establishmentRepository.findById(establishmentId);
    establishmentValidators.validateIfExists(establishment);
    const customer = await customerRepository.findById(customerId);
    customerValidators.validateIfExists(customer);
    await eventRepository.createEvent(eventTypeId, customerId, establishmentId, description, startDateFormated, finishDateFormated, inviteList);
}

exports.updateEvent = async (id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    const startDateFormated = dateFormat(startDate);
    const finishDateFormated = dateFormat(finishDate);

    eventValidators.validateFields(eventTypeId, customerId, establishmentId, description, startDateFormated, finishDateFormated);
    const event = await eventRepository.checkIfExists(id);
    eventValidators.validateIfExists(event);
    const eventType = await eventTypeRepository.findById(eventTypeId);
    eventTypeValidators.validateIfExists(eventType);
    const establishment = await establishmentRepository.findById(establishmentId);
    establishmentValidators.validateIfExists(establishment);
    const customer = await customerRepository.findById(customerId);
    customerValidators.validateIfExists(customer);
    await eventRepository.updateEvent(id, eventTypeId, customerId, establishmentId, description, startDateFormated, finishDateFormated, inviteList);
}

exports.deleteEvent = async (id) => {
    const event = await eventRepository.checkIfExists(id);
    eventValidators.validateIfExists(event);
    await eventRepository.deleteEvent(id);
}