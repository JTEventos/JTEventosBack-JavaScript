exports.getUserByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}

exports.createUserSchema = {
    username : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'username'"
    },
    password : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'password'"
    }
}

exports.updateUserSchema = {
    id : {
        in: "params",
        isInt: true
    },
    username : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'username'"
    },
    password : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'password'"
    }
}