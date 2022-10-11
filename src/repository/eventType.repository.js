const mongo = require("../config/connection.database");
const sqlErrorHandler = require("./utils/handle-sql-error");
const db = require("../config/connection.database");
const EventTypeModel = require("../models/eventType.model");

exports.checkIfExists = async (id) => {
    try {
        const eventType = await EventTypeModel.findById(id);
        return eventType;
    } catch (error) {
        throw error;
    }
}

exports.findAll = async (res) => {
    try {
        const eventTypes = await EventTypeModel.find({});
        return eventTypes;
    } catch (error) {
        throw error;
    }
}

exports.createEventType = async (description) => {
    try {
        const eventType = new EventTypeModel(description); //caso tenha mais de um {name: name, description: description}
        await eventType.save();
    } catch (error) {
        throw error;
    }
}


exports.updateEventType = async (id, description) => {
    try {
        const eventType = await EventTypeModel.findByIdAndUpdate(id, {description: description});
        await eventType.save();
        return eventType;
    } catch (error) {
        throw error;
    }
}

exports.deleteEventType = async (id) => {
    try {
        const eventType = await EventTypeModel.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
}