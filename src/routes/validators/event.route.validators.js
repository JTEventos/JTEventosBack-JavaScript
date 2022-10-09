exports.createEventSchema = {
    eventTypeId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Invalid value for 'eventTypeId'"
    }, 
    customerId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Invalid value for 'customerId'"
    }, 
    establishmentId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Invalid value for 'establishmentId'"
    }, 
    description : {
        notEmpty: true,
        errorMessage: "Invalid value for 'description'"
    },
    startDate : {
        notEmpty: true,
        errorMessage: "Invalid value for 'startDate'"
    },
    finishDate : {
        notEmpty: true,
        errorMessage: "Invalid value for 'finishDate'"
    },
    inviteList : {
        notEmpty: true,
        errorMessage: "Invalid value for 'inviteList'"
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
        errorMessage: "Invalid value for 'eventTypeId'"
    }, 
    customerId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Invalid value for 'customerId'"
    }, 
    establishmentId : {
        notEmpty: true,
        isInt: true,
        errorMessage: "Invalid value for 'establishmentId'"
    }, 
    description : {
        notEmpty: true,
        errorMessage: "Invalid value for 'description'"
    },
    startDate : {
        notEmpty: true,
        errorMessage: "Invalid value for 'startDate'"
    },
    finishDate : {
        notEmpty: true,
        errorMessage: "Invalid value for 'finishDate'"
    },
    inviteList : {
        notEmpty: true,
        errorMessage: "Invalid value for 'inviteList'"
    }
}

exports.deleteEventSchema = {
    id : {
        in: "params",
        isInt: true
    }
}