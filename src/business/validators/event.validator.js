const { paramMustNotBeNull, notFound } = require("./utils/return-message");

exports.validateFields = (eventTypeId, customerId, establishmentId, description, startDate, finishDate) => {
    if (!eventTypeId && !customerId && !establishmentId && !description && !startDate && !finishDate) {
        throw paramMustNotBeNull("eventTypeId, customerId, establishmentId, description, startDate, finishDate");
    }
}

exports.validateIfExists = (event) => {
    if (event !== 1) {
        throw notFound("Evento");
    }
}