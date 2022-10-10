const { Result } = require("express-validator");
const authenticationRepository = require("../repository/authentication.repository");
const authenticationValidators = require("./validators/authentication.validator");

const blacklist = [];

exports.login = async (username, password) => {
    authenticationValidators.validateFields(username, password);
    const user = await authenticationRepository.checkIfExists(username, password);
    authenticationValidators.validateIfExists(user)
    await authenticationRepository.login(username, password);
}

exports.logout = async (headers) => {
    blacklist.push(headers);
    await authenticationRepository.logout();
}
