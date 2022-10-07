const express = require("express");
const eventsController = require("../controllers/events.controller");

const eventsRoute = express.Router();
const path = "/event";

eventsRoute.get(path, eventsController.findAll);
eventsRoute.get(path, eventsController.findById);
eventsRoute.post(path, eventsController.create);
eventsRoute.put(path, eventsController.edit);
eventsRoute.delete(path, eventsController.delete);

module.exports = eventsRoute;
