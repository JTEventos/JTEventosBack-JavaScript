exports.getCustomerByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}

exports.createCustomerSchema = {
    name : {
        notEmpty: true,
        errorMessage: "Campo \"Nome completo\" é obrigatório"
    },
    cpf : {
        notEmpty: true,
        errorMessage: "Campo \"CPF\" é obrigatório"
    },
    email : {
        notEmpty: true,
        errorMessage: "Campo \"E-mail\" é obrigatório"
    },
    phoneNumber : {
        notEmpty: false
    },
    mobileNumber : {
        notEmpty: true,
        errorMessage: "Campo \"Telefone celular\" é obrigatório"
    },
    cep : {
        notEmpty: true,
        errorMessage: "Campo \"CEP\" é obrigatório"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Campo \"Logradouro\" é obrigatório"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Campo \"Número\" é obrigatório"
    },
    streetComplement : {
        notEmpty: false
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Campo \"Bairro\" é obrigatório"
    },
    city : {
        notEmpty: true,
        errorMessage: "Campo \"Cidade\" é obrigatório"
    },
    state : {
        notEmpty: true,
        errorMessage: "Campo \"UF\" é obrigatório"
    }
}

exports.updateCustomerSchema = {
    id : {
        in: "params",
        isInt: true
    },
    name : {
        notEmpty: true,
        errorMessage: "Campo \"Nome completo\" é obrigatório"
    },
    cpf : {
        notEmpty: true,
        errorMessage: "Campo \"CPF\" é obrigatório"
    },
    email : {
        notEmpty: true,
        errorMessage: "Campo \"E-mail\" é obrigatório"
    },
    phoneNumber : {
        notEmpty: false
    },
    mobileNumber : {
        notEmpty: true,
        errorMessage: "Campo \"Telefone celular\" é obrigatório"
    },
    cep : {
        notEmpty: true,
        errorMessage: "Campo \"CEP\" é obrigatório"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Campo \"Logradouro\" é obrigatório"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Campo \"Número\" é obrigatório"
    },
    streetComplement : {
        notEmpty: false
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Campo \"Bairro\" é obrigatório"
    },
    city : {
        notEmpty: true,
        errorMessage: "Campo \"Cidade\" é obrigatório"
    },
    state : {
        notEmpty: true,
        errorMessage: "Campo \"UF\" é obrigatório"
    }
}