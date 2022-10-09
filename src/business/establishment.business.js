const { Result } = require("express-validator");
const establishmentRepository = require("../repository/establishment.repository");
const establishmentValidators = require("./validators/establishment.validator");

exports.findAll = async (query) => {
    const establishments = await establishmentRepository.findAll(query);
    return establishments;
}

exports.createEstablishment = async (description, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    establishmentValidators.validateFields(description, cep, street, streetNumber, streetComplement, neighborhood, city, state);
    await establishmentRepository.createEstablishment(description, cep, street, streetNumber, streetComplement, neighborhood, city, state);
}

exports.updateEstablishment = async (id, description, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    establishmentValidators.validateStatusNotEmpty(description, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
    await establishmentRepository.updateEstablishment(id, description, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
}

exports.deleteEstablishment = async (id) => {
    await establishmentRepository.deleteEstablishment(id);
}
