exports.created = (param) => {
    return { msg: `${param} criado com sucesso` };
}

exports.updated = (param) => {
    return { msg: `${param} alterado com sucesso` };
}

exports.deleted = (param) => {
    return { msg: `${param} excluído com sucesso` };
}

exports.invalidAuth = () => {
    return { msg: "Usuário ou senha inválidos" }
}