const { paramMustNotBeNull, notFound } = require("./utils/return-message");

exports.validateFields = (description, cep, street, streetNumber, neighborhood, city, state) => {
    if (!description && !cep && !street && !streetNumber && !neighborhood && !city && !state) {
        throw paramMustNotBeNull("description, cep, street, streetNumber, neighborhood, city, state");
    }
}

exports.validateIfExists = (establishment) => {
    if (!establishment) {
        throw notFound("Estabelecimento");
    }
}

exports.validateNotNull = (events) => {
    if (events.length == 0) {
        throw noData("Estabelecimento");
    }
}