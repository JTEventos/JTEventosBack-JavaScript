const express = require("express");
const authenticationController = require("../controllers/authentication.controller");
const auth = require("../middleware/authentication.middleware");

const authenticationRoutes = express.Router();
const path = "/login"

const { checkSchema } = require("express-validator")
const { loginSchema } = require("./validators/authentication.route.validators")

authenticationRoutes.post(path, checkSchema(loginSchema), authenticationController.login);

module.exports = authenticationRoutes;