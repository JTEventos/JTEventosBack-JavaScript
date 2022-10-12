const { paramMustNotBeNull, notFound, noData } = require("./utils/return-message");

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

exports.validateNotNull = (eventTypes) => {
    if (eventTypes.length == 0) {
        throw noData("Tipo de Evento");
    }
}