exports.getUserByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}

exports.createUserSchema = {
    role : {
        notEmpty: true,
        errorMessage: "Campo \"Tipo de usuário\" é obrigatório. Selecione uma das opções disponíveis",
        isIn: {
            options:[["ADMIN", "EMPLOYEE"]], 
            errorMessage: "Valor inválido. Valores aceitos: 'ADMIN' ou 'EMPLOYEE'"
        }
    },
    name : {
        notEmpty: true,
        errorMessage: "Campo \"Nome\" é obrigatório"
    },
    username : {
        notEmpty: true,
        errorMessage: "Campo \"Usuário\" é obrigatório"
    },
    password : {
        notEmpty: true,
        errorMessage: "Campo \"Senha\" é obrigatório"
    }
}

exports.updateUserSchema = {
    id : {
        in: "params",
        isInt: true
    },
    role : {
        notEmpty: true,
        errorMessage: "Campo \"Tipo de usuário\" é obrigatório. Selecione uma das opções disponíveis",
        isIn: {
            options:[["ADMIN", "EMPLOYEE"]], 
            errorMessage: "Valor inválido. Valores aceitos: 'ADMIN' ou 'EMPLOYEE'"
        }
    },
    name : {
        notEmpty: true,
        errorMessage: "Campo \"Nome\" é obrigatório"
    },
    username : {
        notEmpty: true,
        errorMessage: "Campo \"Usuário\" é obrigatório"
    },
    password : {
        notEmpty: true,
        errorMessage: "Campo \"Senha\" é obrigatório"
    }
}