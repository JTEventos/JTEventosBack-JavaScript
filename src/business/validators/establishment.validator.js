const { paramMustNotBeNull, notFound } = require("./utils/return-message");

exports.validateFields = (name, cep, street, streetNumber, neighborhood, city, state) => {
    if (!name && !cep && !street && !streetNumber && !neighborhood && !city && !state) {
        throw paramMustNotBeNull("name, cep, street, streetNumber, neighborhood, city, state");
    }
}

exports.validateIfExists = (establishment) => {
    if (establishment !== 1) {
        throw notFound("Estabelecimento");
    }
}