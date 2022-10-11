const sqlErrorHandler = require("./utils/handle-sql-error");
const EventTypeModel = require("../models/eventType.model");

exports.checkIfExists = async (id) => {
    try {
        const eventType = await EventTypeModel.findOne(id);
        return eventType;
    } catch (error) {
        sqlErrorHandler(error);
    }
}

exports.findAll = async () => {
    try {
        const eventTypes = await EventTypeModel.find({});
        return eventTypes;
    } catch (error) {
        sqlErrorHandler(error);
    }
}

exports.createEventType = async (description) => {
    try {
        const eventType = new EventTypeModel(description);
        await eventType.save();
    } catch (error) {
        sqlErrorHandler(error);
    }
}


exports.updateEventType = async (id, description) => {
    try {
        const eventType = await EventTypeModel.findByIdAndUpdate(id, {description: description});
        await eventType.save();
        return eventType;
    } catch (error) {
        sqlErrorHandler(error);
    }
}

exports.deleteEventType = async (id) => {
    try {
        await EventTypeModel.findByIdAndDelete(id);
    } catch (error) {
        sqlErrorHandler(error);
    }
}