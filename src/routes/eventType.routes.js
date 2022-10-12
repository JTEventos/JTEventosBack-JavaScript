const express = require("express");
const eventTypeController = require("../controllers/eventType.controller");

const eventTypeRoutes = express.Router();
const path = "/api/eventType";

const { checkSchema } = require("express-validator")
const { getEventTypeByIdSchema, createEventTypeSchema, updateEventTypeSchema } = require("./validators/eventType.route.validators")

eventTypeRoutes.get(path, eventTypeController.findAll);
eventTypeRoutes.get(`${path}/:id`, checkSchema(getEventTypeByIdSchema), eventTypeController.findById);
eventTypeRoutes.post(path, checkSchema(createEventTypeSchema), eventTypeController.createEventType);
eventTypeRoutes.put(`${path}/:id`, checkSchema(updateEventTypeSchema), eventTypeController.updateEventType);
eventTypeRoutes.delete(`${path}/:id`, checkSchema(getEventTypeByIdSchema), eventTypeController.deleteEventType);

module.exports = eventTypeRoutes;