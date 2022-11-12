exports.getUserByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}

exports.createUserSchema = {
    name : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'name'"
    },
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
            errorMessage: "Valor inválido. Valores aceitos: 'ADMIN' ou 'EMPLOYEE'"
        }
    }
}

exports.updateUserSchema = {
    id : {
        in: "params",
        isInt: true
    },
    name : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'name'"
    },
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
            errorMessage: "Valor inválido. Valores aceitos: 'ADMIN' ou 'EMPLOYEE'"
        }
    }
}