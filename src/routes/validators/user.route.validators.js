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
    },
    role : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'role'",
        isIn: {
            options:[["ADMIN", "EMPLOYEE"]], 
            errorMessage: "Valor inválidos, valores aceitos: 'ADMIN' ou 'EMPLOYEE'"
        }
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