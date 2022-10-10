const { paramMustNotBeNull, userNotFound } = require("./utils/return-message");

exports.validateFields = (username, password) => {
    if (!username && !password) {
        throw paramMustNotBeNull("username, password");
    }
}

exports.validateIfExists = (user) => {
    if (user !== 1) {
        throw userNotFound();
    }
}