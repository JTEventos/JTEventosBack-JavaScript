const { paramMustNotBeNull, notFound } = require("./utils/return-message");

exports.validateFields = (description) => {
    if (!description) {
        throw paramMustNotBeNull("description");
    }
}

exports.validateIfExists = (eventType) => {
    if (eventType !== 1) {
        throw notFound("Tipo de Evento");
    }
}