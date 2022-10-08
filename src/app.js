const express = require("express");
const cors = require("cors");
const errorHandler = require("errorhandler");
const helmet = require("helmet");

const usersRoute = require("./routes/users.route");
const customersRoute = require("./routes/customers.route");
const eventsRoute = require("./routes/events.route");

const app = express();

// Express middleware configuration
app.set("port", process.env.PORT || 3000);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
}

// Adding routes
app.use(usersRoute);
app.use(customersRoute);
app.use(eventsRoute);

module.exports = app;
