const express = require("express");
const customersController = require("../controllers/customers.controller");

const customersRoute = express.Router();
const path = "/customer";

customersRoute.get(path, customersController.findAll);
customersRoute.get(path, customersController.findById);
customersRoute.post(path, customersController.create);
customersRoute.put(path, customersController.edit);
customersRoute.delete(path, customersController.delete);

module.exports = customersRoute;
