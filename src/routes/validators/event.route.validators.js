exports.createEventSchema = {
    eventTypeId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Valor inválido para 'eventTypeId'"
    }, 
    customerId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Valor inválido para 'customerId'"
    }, 
    establishmentId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Valor inválido para 'establishmentId'"
    }, 
    description : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'description'"
    },
    startDate : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'startDate'"
    },
    finishDate : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'finishDate'"
    },
    inviteList : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'inviteList'"
    }
}

exports.updateEventSchema = {
    id: {
        in: "params",
        isInt: true
    },
    eventTypeId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Valor inválido para 'eventTypeId'"
    }, 
    customerId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Valor inválido para 'customerId'"
    }, 
    establishmentId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Valor inválido para 'establishmentId'"
    }, 
    description : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'description'"
    },
    startDate : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'startDate'"
    },
    finishDate : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'finishDate'"
    },
    inviteList : {
        notEmpty: false,
        errorMessage: "Valor inválido para 'inviteList'"
    }
}

exports.getEventByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}