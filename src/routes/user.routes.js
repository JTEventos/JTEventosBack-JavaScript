const express = require("express");
const userController = require("../controllers/user.controller");

const userRoutes = express.Router();
const path = "/api/user";

const { checkSchema } = require("express-validator")
const { getUserByIdSchema, createUserSchema, updateUserSchema } = require("./validators/user.route.validators")

userRoutes.get(path, userController.findAll);
userRoutes.get(`${path}/:id`, checkSchema(getUserByIdSchema), userController.findById);
userRoutes.post(path, checkSchema(createUserSchema), userController.createUser);
userRoutes.put(`${path}/:id`, checkSchema(updateUserSchema), userController.updateUser);
userRoutes.delete(`${path}/:id`, checkSchema(getUserByIdSchema), userController.deleteUser);

module.exports = userRoutes;