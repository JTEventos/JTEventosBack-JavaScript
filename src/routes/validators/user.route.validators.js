exports.getUserByIdSchema = {
    id : {
        in: "params",
        isInt: true
    }
}

exports.createUserSchema = {
    username : {
        notEmpty: true,
        errorMessage: "Invalid value for 'username'"
    },
    password : {
        notEmpty: true,
        errorMessage: "Invalid value for 'password'"
    }
}

exports.updateUserSchema = {
    id : {
        in: "params",
        isInt: true
    },
    username : {
        notEmpty: true,
        errorMessage: "Invalid value for 'username'"
    },
    password : {
        notEmpty: true,
        errorMessage: "Invalid value for 'password'"
    }
}