exports.createEventTypeSchema = {
    description : {
        notEmpty: true,
        errorMessage: "Invalid value for 'description'"
    }
}

exports.updateEventTypeSchema = {
    id: {
        in: "params",
        isInt: true
    },
    description : {
        notEmpty: true,
        errorMessage: "Invalid value for 'description'"
    }
}

exports.deleteEventTypeSchema = {
    id : {
        in: "params",
        isInt: true
    }
}