const { Result } = require("express-validator");
const eventTypeRepository = require("../repository/eventType.repository");
const eventTypeValidators = require("./validators/eventType.validator");

exports.findAll = async (query) => {
    const eventTypes = await eventTypeRepository.findAll(query);
    return eventTypes;
}

exports.createEventType = async (description) => {
    eventTypeValidators.validateFields(description);
    await eventTypeRepository.createEventType(description);
}

exports.updateEventType = async (id, description) => {
    eventTypeValidators.validateStatusNotEmpty(id, description);
    await eventTypeRepository.updateEventType(id, description);
}

exports.deleteEventType = async (id) => {
    await eventTypeRepository.deleteEventType(id);
}
