const { Result } = require("express-validator");
const establishmentRepository = require("../repository/establishment.repository");
const establishmentValidators = require("./validators/establishment.validator");

exports.findAll = async () => {
    const establishments = await establishmentRepository.findAll();
    establishmentValidators.validateNotNull(establishments);
    return establishments;
}

exports.findById = async (id) => {
    const establishment = await establishmentRepository.findById(id);
    establishmentValidators.validateIfExists(establishment);
    return establishment;
}

exports.createEstablishment = async (description, cep, street, streetNumber, streetComplement, neighborhood, city, state) => {
    establishmentValidators.validateFields(description, cep, street, streetNumber, neighborhood, city, state);
    await establishmentRepository.createEstablishment(description, cep, street, streetNumber, streetComplement, neighborhood, city, state);
}

exports.updateEstablishment = async (id, description, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    establishmentValidators.validateFields(description, cep, street, streetNumber, neighborhood, city, state);
    const establishment = await establishmentRepository.findById(id);
    establishmentValidators.validateIfExists(establishment);
    await establishmentRepository.updateEstablishment(id, description, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
}

exports.deleteEstablishment = async (id) => {
    const establishment = await establishmentRepository.findById(id);
    establishmentValidators.validateIfExists(establishment);
    await establishmentRepository.deleteEstablishment(id);
}
