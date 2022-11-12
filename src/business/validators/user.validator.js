const { paramMustNotBeNull, notFound, noData, insufficientPrivileges } = require("./utils/return-message");

exports.validateFields = (name, username, password, role) => {
    if (!name && !username && !password && !role) {
        throw paramMustNotBeNull("name, username, password, role");
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