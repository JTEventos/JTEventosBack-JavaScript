exports.createEstablishmentSchema = {
    description : {
        notEmpty: true,
        errorMessage: "Campo \"Descrição\" é obrigatório"
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
        isInt: true,
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

exports.updateEstablishmentSchema = {
    id : {
        in: "params",
        isInt: true
    },
    description : {
        notEmpty: true,
        errorMessage: "Campo \"Descrição\" é obrigatório"
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
        isInt: true,
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

exports.getEstablishmentByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}