const express = require("express");
const customerController = require("../controllers/customer.controller");

const customerRoutes = express.Router();
const path = "/api/customer";

const { checkSchema } = require("express-validator")
const { getCustomerByIdSchema, createCustomerSchema, updateCustomerSchema } = require("./validators/customer.route.validators")

customerRoutes.get(path, customerController.findAll);
customerRoutes.get(`${path}/:id`, checkSchema(getCustomerByIdSchema), customerController.findById);
customerRoutes.post(path, checkSchema(createCustomerSchema), customerController.createCustomer);
customerRoutes.put(`${path}/:id`, checkSchema(updateCustomerSchema), customerController.updateCustomer);
customerRoutes.delete(`${path}/:id`, checkSchema(getCustomerByIdSchema), customerController.deleteCustomer);

module.exports = customerRoutes;