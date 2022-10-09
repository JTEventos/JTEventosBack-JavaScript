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
        errorMessage: "Invalid value for 'name'"
    },
    cpf : {
        notEmpty: true,
        errorMessage: "Invalid value for 'cpf'"
    }, 
    cep : {
        notEmpty: true,
        errorMessage: "Invalid value for 'cep'"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Invalid value for 'street'"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Invalid value for 'streetNumber'"
    },
    streetComplement : {
        notEmpty: false,
        errorMessage: "Invalid value for 'streetComplement'"
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Invalid value for 'neighborhood'"
    },
    city : {
        notEmpty: true,
        errorMessage: "Invalid value for 'city'"
    },
    state : {
        notEmpty: true,
        errorMessage: "Invalid value for 'state'"
    },
    email : {
        notEmpty: true,
        errorMessage: "Invalid value for 'email'"
    },
    mobileNumber : {
        notEmpty: true,
        errorMessage: "Invalid value for 'mobileNumber'"
    },
    phoneNumber : {
        notEmpty: false,
        errorMessage: "Invalid value for 'phoneNumber'"
    }
}

exports.updateCustomerSchema = {
    id : {
        in: "params",
        isInt: true
    },
    name : {
        notEmpty: true,
        errorMessage: "Invalid value for 'name'"
    },
    cpf : {
        notEmpty: true,
        errorMessage: "Invalid value for 'cpf'"
    }, 
    cep : {
        notEmpty: true,
        errorMessage: "Invalid value for 'cep'"
    }, 
    street : {
        notEmpty: true,
        errorMessage: "Invalid value for 'street'"
    },
    streetNumber : {
        notEmpty: true,
        errorMessage: "Invalid value for 'streetNumber'"
    },
    streetComplement : {
        notEmpty: false,
        errorMessage: "Invalid value for 'streetComplement'"
    },
    neighborhood : {
        notEmpty: true,
        errorMessage: "Invalid value for 'neighborhood'"
    },
    city : {
        notEmpty: true,
        errorMessage: "Invalid value for 'city'"
    },
    state : {
        notEmpty: true,
        errorMessage: "Invalid value for 'state'"
    },
    email : {
        notEmpty: true,
        errorMessage: "Invalid value for 'email'"
    },
    mobileNumber : {
        notEmpty: true,
        errorMessage: "Invalid value for 'mobileNumber'"
    },
    phoneNumber : {
        notEmpty: false,
        errorMessage: "Invalid value for 'phoneNumber'"
    }
}