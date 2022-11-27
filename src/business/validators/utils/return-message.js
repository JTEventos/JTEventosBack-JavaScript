exports.paramMustNotBeNull = (param) => {
    return { status: 400, msg: `Um dos parâmetros a seguir não podem ser nulos: ${param}` };
}

exports.notFound = (param) => {
    return { status: 404, msg: `${param} não encontrado` };
}

exports.notValid = (param) => {
    return { status: 404, msg: `${param} inválido` };
}

exports.noData = (param) => {
    return { status: 404, msg: `Não há nenhum ${param} cadastrado` }
}

exports.exists = (param, param2) => {
    return { status: 404, msg: `Já existe um ${param} cadastrado com este ${param2}` }
}

exports.onThisDate = (param) => {
    return { status: 404, msg: `Existe um ou mais ${param} neste intervalo de data` }
}

exports.insufficientPrivileges = () => {
    return { status: 401, msg: "Privilégios Insuficientes" }
}