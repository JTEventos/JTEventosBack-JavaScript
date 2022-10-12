const { paramMustNotBeNull, notFound } = require("./utils/return-message");

exports.validateFields = (description) => {
    if (!description) {
        throw paramMustNotBeNull("description");
    }
}

exports.validateIfExists = (eventType) => {
    if (!eventType) {
        throw notFound("Tipo de Evento");
    }
}

exports.validateNotNull = (events) => {
    if (events.length == 0) {
        throw noData("Tipo de Evento");
    }
}