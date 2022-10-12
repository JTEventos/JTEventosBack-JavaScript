const mongoErrorHandler = require("./utils/handle-mongo-error");
const UserModel = require("../models/user.model");

exports.findAll = async () => {
    try {
        const user = await UserModel.find().select("-password");
        return user;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.findById = async (id) => {
    try {
        const user = await UserModel.findById(id).select("-password");
        return user;
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.createUser = async (username, password, role) => {
    try {
        const user = await UserModel({
            username: username,
            password: password,
            role: role
        });
        await user.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.updateUser = async (id, username, password, role) => {
    try {
        const user = await UserModel.findByIdAndUpdate(id, {
            username: username,
            password: password,
            role: role
        });
        await user.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.deleteUser = async (id) => {
    try {
        await UserModel.findByIdAndDelete(id);
    } catch (e) {
        mongoErrorHandler(e);
    }
}