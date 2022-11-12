const { Result } = require("express-validator");
const userRepository = require("../repository/user.repository");
const userValidators = require("./validators/user.validator");

exports.findAll = async () => {
    const users = await userRepository.findAll();
    userValidators.validateNotNull(users);
    return users;
}

exports.findById = async (id) => {
    const user = await userRepository.findById(id);
    userValidators.validateIfExists(user);
    return user;
}

exports.createUser = async (name, username, password, role) => {
    userValidators.validateFields(name, username, password, role);
    userValidators.validadeIsAdmin(global.role)
    await userRepository.createUser(name, username, password, role);
}

exports.updateUser = async (id, name, username, password, role) => {
    userValidators.validateFields(name, username, password, role);
    const user = await userRepository.findById(id);
    userValidators.validateIfExists(user);
    userValidators.validadeIsAdmin(global.role)
    await userRepository.updateUser(id, name, username, password, role);
}

exports.deleteUser = async (id) => {
    const user = await userRepository.findById(id);
    userValidators.validateIfExists(user);
    userValidators.validadeIsAdmin(global.role)
    await userRepository.deleteUser(id);
}
