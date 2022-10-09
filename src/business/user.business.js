const { Result } = require("express-validator");
const userRepository = require("../repository/user.repository");
const userValidators = require("./validators/user.validator");

exports.findAll = async (query) => {
    const users = await userRepository.findAll(query);
    return users;
}

exports.findById = async (id) => {
    const user = await userRepository.findById(id);
    return user;
}

exports.createUser = async (username, password) => {
    userValidators.validateFields(username, password);
    await userRepository.createUser(username, password);
}

exports.updateUser = async (id, username, password) => {
    userValidators.validateStatusNotEmpty(username, password);
    await userRepository.updateUser(id, username, password);
}
