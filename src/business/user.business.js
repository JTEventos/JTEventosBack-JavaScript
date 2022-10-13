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

exports.createUser = async (username, password, role) => {
    userValidators.validateFields(username, password, role);
    userValidators.validadeIsAdmin(global.role)
    await userRepository.createUser(username, password, role);
}

exports.updateUser = async (id, username, password, role) => {
    userValidators.validateFields(username, password, role);
    const user = await userRepository.findById(id);
    userValidators.validateIfExists(user);
    userValidators.validadeIsAdmin(global.role)
    await userRepository.updateUser(id, username, password, role);
}

exports.deleteUser = async (id) => {
    const user = await userRepository.findById(id);
    userValidators.validateIfExists(user);
    userValidators.validadeIsAdmin(global.role)
    await userRepository.deleteUser(id);
}
