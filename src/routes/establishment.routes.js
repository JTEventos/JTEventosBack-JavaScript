const express = require("express");
const establishmentController = require("../controllers/establishment.controller");

const establishmentRoutes = express.Router();
const path = "/establishment";

const { checkSchema } = require("express-validator")
const { createEstablishmentSchema, updateEstablishmentSchema, deleteEstablishmentSchema } = require("./validators/establishment.route.validators")

establishmentRoutes.get(path, establishmentController.findAll);
establishmentRoutes.post(path, checkSchema(createEstablishmentSchema), establishmentController.createEstablishment);
establishmentRoutes.put(`${path}/:id`, checkSchema(updateEstablishmentSchema), establishmentController.updateEstablishment);
establishmentRoutes.delete(`${path}/:id`, checkSchema(deleteEstablishmentSchema), establishmentController.deleteEstablishment);

module.exports = establishmentRoutes;