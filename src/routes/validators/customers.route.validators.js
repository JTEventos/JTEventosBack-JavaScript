exports.getCustomerByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}

exports.getCustomerByNameSchema = {
    name : {
        in: "params",
        isInt: true
    }
}

exports.getCustomerByCpfSchema = {
    cpf : {
        in: "params",
        isInt: true
    }
}

exports.createCustomerSchema = {
    name : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'name'"
    },
    cpf : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'cpf'"
    }, 
    cep : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'cep'"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'street'"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'streetNumber'"
    },
    streetComplement : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'streetComplement'"
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'neighborhood'"
    },
    city : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'city'"
    },
    state : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'state'"
    },
    email : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'email'"
    },
    mobileNumber : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'mobileNumber'"
    },
    phoneNumber : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'phoneNumber'"
    }
}

exports.updateCustomerSchema = {
    id : {
        in: "params",
        isInt: true
    },
    name : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'name'"
    },
    cpf : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'cpf'"
    }, 
    cep : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'cep'"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'street'"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'streetNumber'"
    },
    streetComplement : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'streetComplement'"
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'neighborhood'"
    },
    city : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'city'"
    },
    state : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'state'"
    },
    email : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'email'"
    },
    mobileNumber : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'mobileNumber'"
    },
    phoneNumber : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'phoneNumber'"
    }
}