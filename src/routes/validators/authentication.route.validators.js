exports.loginSchema = {
    username : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'username'"
    },
    password : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'password'"
    }
}