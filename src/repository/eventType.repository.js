const mongoErrorHandler = require("./utils/handle-mongo-error");
const EventTypeModel = require("../models/eventType.model");

exports.checkIfExists = async (id) => {
    try {
        const eventType = await EventTypeModel.findById(id);
        return eventType        
    } catch (error) {
        mongoErrorHandler(error);
    }
}

exports.findAll = async () => {
    try {
        const eventTypes = await EventTypeModel.find({});
        return eventTypes;
    } catch (error) {
        mongoErrorHandler(error);
    }
}

exports.createEventType = async (description) => {
    try {
        const eventType = new EventTypeModel(description);
        await eventType.save();
    } catch (error) {
        mongoErrorHandler(error);
    }
}


exports.updateEventType = async (id, description) => {
    try {
        const eventType = await EventTypeModel.findByIdAndUpdate(id, {description: description});
        await eventType.save();
    } catch (error) {
        mongoErrorHandler(error);
    }
}

exports.deleteEventType = async (id) => {
    try {
        await EventTypeModel.findByIdAndDelete(id);
    } catch (error) {
        mongoErrorHandler(error);
    }
}