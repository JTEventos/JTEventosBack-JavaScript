exports.createEstablishmentSchema = {
    description : {
        notEmpty: true,
        errorMessage: "Invalid value for 'description'"
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
    }
}

exports.updateEstablishmentSchema = {
    id : {
        in: "params",
        isInt: true
    },
    description : {
        notEmpty: true,
        errorMessage: "Invalid value for 'description'"
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
    }
}

exports.deleteEstablishmentSchema = {
    id : {
        in: "params",
        isInt: true
    }
}