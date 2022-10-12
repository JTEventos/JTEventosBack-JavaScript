const { Result } = require("express-validator");
const eventTypeRepository = require("../repository/eventType.repository");
const eventTypeValidators = require("./validators/eventType.validator");

exports.findAll = async () => {
    const eventTypes = await eventTypeRepository.findAll();
    return eventTypes;
}

exports.createEventType = async (description) => {
    eventTypeValidators.validateFields(description);
    await eventTypeRepository.createEventType(description);
}

exports.updateEventType = async (id, description) => {
    eventTypeValidators.validateFields(description);
    const eventType = await eventTypeRepository.findById(id);
    eventTypeValidators.validateIfExists(eventType);
    await eventTypeRepository.updateEventType(id, description);
}

exports.deleteEventType = async (id) => {
    const eventType = await eventTypeRepository.findById(id);
    eventTypeValidators.validateIfExists(eventType);
    await eventTypeRepository.deleteEventType(id);
}
