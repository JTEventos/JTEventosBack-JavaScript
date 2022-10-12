const mongoErrorHandler = require("./utils/handle-mongo-error");
const EventModel = require("../models/event.model");

exports.findAll = async () => {
    try {
        const events = await EventModel.find();
        return events;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findById = async (id) => {
    try {
        const event = await EventModel.findById(id);
        return event;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.createEvent = async (eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    try {
        const event = await EventModel({
            eventTypeId: eventTypeId,
            customerId: customerId,
            establishmentId: establishmentId,
            description: description,
            startDate: startDate,
            finishDate: finishDate,
            inviteList: inviteList
        });
        await event.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.updateEvent = async (id, eventTypeId, customerId, establishmentId, description, startDate, finishDate, inviteList) => {
    try {
        const event = await EventModel.findByIdAndUpdate(id, {
            eventTypeId: eventTypeId,
            customerId: customerId,
            establishmentId: establishmentId,
            description: description,
            startDate: startDate,
            finishDate: finishDate,
            inviteList: inviteList
        });
        await event.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.deleteEvent = async (id) => {
    try {
        await EventModel.findByIdAndDelete(id);
    } catch (e) {
        mongoErrorHandler(e);
    }
}