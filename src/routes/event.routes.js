const express = require("express");
const eventController = require("../controllers/event.controller");

const eventRoutes = express.Router();
const path = "/event";

const { checkSchema } = require("express-validator")
const { createEventSchema, updateEventSchema, deleteEventSchema } = require("./validators/event.route.validators")

eventRoutes.get(path, eventController.findAll);
eventRoutes.post(path, checkSchema(createEventSchema), eventController.createEvent);
eventRoutes.put(`${path}/:id`, checkSchema(updateEventSchema), eventController.updateEvent);
eventRoutes.delete(`${path}/:id`, checkSchema(deleteEventSchema), eventController.deleteEvent);

module.exports = eventRoutes;