const mongoErrorHandler = require("./utils/handle-mongo-error");
const EventModel = require("../models/event.model");

exports.findAll = async () => {
    try {
        const events = await EventModel.aggregate(
            [
                {
                    $lookup: {
                        from: "customers",
                        localField: "customerId",
                        foreignField: "_id",
                        as: "customerId"
                    }
                },
                {
                    $lookup: {
                        from: "eventtypes",
                        localField: "eventTypeId",
                        foreignField: "_id",
                        as: "eventTypeId"
                    }
                },
                {
                    $lookup: {
                        from: "establishments",
                        localField: "establishmentId",
                        foreignField: "_id",
                        as: "establishmentId"
                    }
                }
            ]
        );

        return events;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.checkIfExists = async (id) => {
    try {
        const event = await EventModel.findById(id);
        return event;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findEventsOnThisRangeDate = async (establishmentId, startDate, finishDate, id = undefined) => {
    try {
        let events = undefined;
        console.log(id)
        if (id) {
            events = await EventModel.find({
                _id: { $ne: id },
                establishmentId: establishmentId,
                startDate: {
                    $gte: new Date(startDate),
                    $lte: new Date(finishDate)
                },
                finishDate: {
                    $gte: new Date(startDate),
                    $lte: new Date(finishDate)
                }
            })
        } else {
            events = await EventModel.find({
                establishmentId: establishmentId,
                startDate: {
                    $gte: new Date(startDate),
                    $lte: new Date(finishDate)
                },
                finishDate: {
                    $gte: new Date(startDate),
                    $lte: new Date(finishDate)
                }
            });
        }
        return events;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findById = async (id) => {
    try {
        const event = await EventModel.aggregate(
            [
                {
                    $match: {
                        _id: {
                            $in: [parseInt(id)]
                        }
                    }
                },
                {
                    $lookup: {
                        from: "customers",
                        localField: "customerId",
                        foreignField: "_id",
                        as: "customerId"
                    }
                },
                {
                    $lookup: {
                        from: "eventtypes",
                        localField: "eventTypeId",
                        foreignField: "_id",
                        as: "eventTypeId"
                    }
                },
                {
                    $lookup: {
                        from: "establishments",
                        localField: "establishmentId",
                        foreignField: "_id",
                        as: "establishmentId"
                    }
                }
            ]
        );

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