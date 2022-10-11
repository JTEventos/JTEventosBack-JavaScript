const { paramMustNotBeNull, notFound } = require("./utils/return-message");

exports.validateFields = (username, password) => {
    if (!username && !password) {
        throw paramMustNotBeNull("username, password");
    }
}

exports.validateIfExists = (user) => {
    if (!user) {
        throw notFound("Usuário");
    }
}