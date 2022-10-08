const express = require("express");
const usersController = require("../controllers/user.controller");

const usersRoute = express.Router();
const path = "/user";

usersRoute.get(path, usersController.findAll);
usersRoute.get(path, usersController.findById);
usersRoute.post(path, usersController.create);
usersRoute.put(path, usersController.edit);

module.exports = usersRoute;
