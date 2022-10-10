const { Result } = require("express-validator");
const customerRepository = require("../repository/customer.repository");
const customerValidators = require("./validators/customer.validator");

exports.findAll = async (query) => {
    const customers = await customerRepository.findAll(query);
    return customers;
}

exports.findById = async (id) => {
    const customer = await customerRepository.findById(id);
    return customer;
}

exports.findByName = async (name) => {
    const customers = await customerRepository.findById(name);
    return customers;
}

exports.findByCpf = async (cpf) => {
    const customer = await customerRepository.findById(cpf);
    return customer;
}

exports.createCustomer = async (name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    customerValidators.validateFields(name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber);
    customerValidators.validateCpf(cpf);
    await customerRepository.createCustomer(name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
}

exports.updateCustomer = async (id, name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber) => {
    customerValidators.validateFields(name, cpf, cep, street, streetNumber, neighborhood, city, state, email, mobileNumber);
    customerValidators.validateCpf(cpf);
    const customer = await customerRepository.checkIfExists(id);
    customerValidators.validateIfExists(customer);
    await customerRepository.updateCustomer(id, name, cpf, cep, street, streetNumber, streetComplement, neighborhood, city, state, email, mobileNumber, phoneNumber);
}

exports.deleteCustomer = async (id) => {
    const customer = await customerRepository.checkIfExists(id);
    customerValidators.validateIfExists(customer);
    await customerRepository.deleteCustomer(id);
}
