exports.paramMustNotBeNull = (param) => {
    return {status: 400, msg: `Um dos parâmetros a seguir não podem ser nulos: ${param}` };
}

exports.notFound = (param) => {
    return { status: 404, msg: `${param} não encontrado` };
}

exports.notValid = (param) => {
    return { status: 404, msg: `${param} inválido` };
}

exports.userNotFound = () => {
    return { status: 401, msg: "Usuário ou senha inválidos" };
}