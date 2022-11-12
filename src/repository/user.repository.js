const mongoErrorHandler = require("./utils/handle-mongo-error");
const { hashSync } = require("bcrypt");
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

exports.createUser = async (name, username, password, role) => {
    try {
        const user = await UserModel({
            name: name,
            username: username,
            password: password,
            role: role
        });
        user.password = hashSync(password, 10);
        await user.save();
    } catch (e) {
        mongoErrorHandler(e);
    }
}

exports.updateUser = async (id, name, username, password, role) => {
    try {
        const user = await UserModel.findByIdAndUpdate(id, {
            name: name,
            username: username,
            password: password,
            role: role
        });
        user.password = hashSync(password, 10);
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