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

exports.createUser = async (username, password) => {
    userValidators.validateFields(username, password);
    await userRepository.createUser(username, password);
}

exports.updateUser = async (id, username, password) => {
    userValidators.validateFields(username, password);
    const user = await userRepository.findById(id);
    userValidators.validateIfExists(user);
    await userRepository.updateUser(id, username, password);
}
