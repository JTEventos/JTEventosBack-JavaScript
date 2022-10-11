const mongoErrorHandler = require("./utils/handle-mongo-error");
const UserModel = require("../models/user.model");

exports.checkIfExists = async (id) => {
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findAll = async () => {
    try {
        const user = await UserModel.find();
        return user;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findById = async (id) => {
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.createUser = async (username, password) => {
    try {
        const user = UserModel({
            username: username,
            password: password
        })
        user.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.updateUser = async (id, username, password) => {
    try {
        const user = UserModel(id, {
            username: username,
            password: password
        })
        user.save();
    } catch(e) {
        mongoErrorHandler(e);
    }
}