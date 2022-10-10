exports.createEventTypeSchema = {
    description : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'description'"
    }
}

exports.updateEventTypeSchema = {
    id: {
        in: "params",
        isInt: true
    },
    description : {
        notEmpty: true,
        errorMessage: "Valor inválido para 'description'"
    }
}

exports.deleteEventTypeSchema = {
    id : {
        in: "params",
        isInt: true
    }
}