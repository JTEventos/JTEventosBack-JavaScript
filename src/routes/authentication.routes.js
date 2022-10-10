const express = require("express");
const authenticationController = require("../controllers/authentication.controller");

const authenticationRoutes = express.Router();

const { checkSchema } = require("express-validator")
const { loginSchema } = require("./validators/authentication.route.validators")

authenticationRoutes.post("/login", checkSchema(loginSchema), authenticationController.login);
authenticationRoutes.post("/logout", authenticationController.logout);

module.exports = authenticationRoutes;