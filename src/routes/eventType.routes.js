const express = require("express");
const eventTypeController = require("../controllers/eventType.controller");

const eventTypeRoutes = express.Router();
const path = "/eventType";

const { checkSchema } = require("express-validator")
const { createEventTypeSchema, updateEventTypeSchema, deleteEventTypeSchema } = require("./validators/eventType.route.validators")

eventTypeRoutes.get(path, eventTypeController.findAll);
eventTypeRoutes.post(path, checkSchema(createEventTypeSchema), eventTypeController.createEventType);
eventTypeRoutes.put(`${path}/:id`, checkSchema(updateEventTypeSchema), eventTypeController.updateEventType);
eventTypeRoutes.delete(`${path}/:id`, checkSchema(deleteEventTypeSchema), eventTypeController.deleteEventType);

module.exports = eventTypeRoutes;