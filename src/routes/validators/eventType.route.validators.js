exports.createEventTypeSchema = {
    description : {
        notEmpty: true,
        errorMessage: "Campo \"Descrição\" é obrigatório"
    }
}

exports.updateEventTypeSchema = {
    id: {
        in: "params",
        isInt: true
    },
    description : {
        notEmpty: true,
        errorMessage: "Campo \"Descrição\" é obrigatório"
    }
}

exports.getEventTypeByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}