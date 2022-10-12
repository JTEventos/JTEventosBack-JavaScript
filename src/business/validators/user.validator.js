const { paramMustNotBeNull, notFound, noData, insufficientPrivileges } = require("./utils/return-message");

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

exports.validateNotNull = (users) => {
    if (users.length == 0) {
        throw noData("Usuário");
    }
}

exports.validadeIsAdmin = (role) => {
    if (role !== "ADMIN") {
        throw insufficientPrivileges();
    }
}