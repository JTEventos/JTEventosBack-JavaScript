const express = require("express");
const exampleController = require("../controllers/example.controller");

const exampleRoute = express.Router();
const path = "/example";

exampleRoute.get(path, exampleController.listExample);

module.exports = exampleRoute;
