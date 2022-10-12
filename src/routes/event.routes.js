const express = require("express");
const eventController = require("../controllers/event.controller");

const eventRoutes = express.Router();
const path = "/api/event";

const { checkSchema } = require("express-validator")
const { getEventByIdSchema, createEventSchema, updateEventSchema } = require("./validators/event.route.validators")

eventRoutes.get(path, eventController.findAll);
eventRoutes.get(`${path}/:id`, checkSchema(getEventByIdSchema), eventController.findById);
eventRoutes.post(path, checkSchema(createEventSchema), eventController.createEvent);
eventRoutes.put(`${path}/:id`, checkSchema(updateEventSchema), eventController.updateEvent);
eventRoutes.delete(`${path}/:id`, checkSchema(getEventByIdSchema), eventController.deleteEvent);

module.exports = eventRoutes;