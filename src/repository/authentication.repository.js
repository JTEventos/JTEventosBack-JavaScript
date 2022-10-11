const sqlErrorHandler = require("./utils/handle-sql-error");
const UserModel = require("../models/user.model")

exports.checkIfExists = async (username, password) => {
    try {
        const user = await UserModel.findOne({ username: username, password: password })
        return user;
    } catch (e) {
        sqlErrorHandler(e);
    }
}
