const mongoErrorHandler = require("./utils/handle-mongo-error");
const EventTypeModel = require("../models/eventType.model");

exports.findAll = async () => {
    try {
        const eventTypes = await EventTypeModel.find({});
        return eventTypes;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findById = async (id) => {
    try {
        const eventType = await EventTypeModel.findById(id);
        return eventType;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.createEventType = async (description) => {
    try {
        const eventType = new EventTypeModel(description);
        await eventType.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}


exports.updateEventType = async (id, description) => {
    try {
        const eventType = await EventTypeModel.findByIdAndUpdate(id, {description: description});
        await eventType.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.deleteEventType = async (id) => {
    try {
        await EventTypeModel.findByIdAndDelete(id);
    } catch (e) {
        mongoErrorHandler(e);
    }
}