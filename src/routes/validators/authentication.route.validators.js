exports.loginSchema = {
    username : {
        notEmpty: true,
        errorMessage: "Campo \"Usuário\" é obrigatório"
    },
    password : {
        notEmpty: true,
        errorMessage: "Campo \"Senha\" é obrigatório"
    }
}