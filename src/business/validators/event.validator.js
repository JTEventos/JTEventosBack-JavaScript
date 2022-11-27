const { paramMustNotBeNull, notFound, noData, onThisDate } = require("./utils/return-message");

exports.validateFields = (eventTypeId, customerId, establishmentId, description, startDate, finishDate) => {
    if (!eventTypeId && !customerId && !establishmentId && !description && !startDate && !finishDate) {
        throw paramMustNotBeNull("eventTypeId, customerId, establishmentId, description, startDate, finishDate");
    }
}

exports.validateIfExists = (event) => {
    if (!event) {
        throw notFound("Evento");
    }
}

exports.validateDateRange = (events) => {
    if (events.length != 0) {
        throw onThisDate("Eventos");
    }
}

exports.validateNotNull = (events) => {
    if (events.length == 0) {
        throw noData("Evento");
    }
}