const express = require("express");
const cors = require("cors");
const errorHandler = require("errorhandler");
const helmet = require("helmet");
const db = require("./config/connection.database")

const authenticationRoute = require("./routes/authentication.routes");
const auth = require("./middleware/authentication.middleware");
const userRoute = require("./routes/user.routes");
const customerRoute = require("./routes/customer.routes");
const eventTypeRoute = require("./routes/eventType.routes");
const establishmentRoute = require("./routes/establishment.routes");
const eventRoute = require("./routes/event.routes");
const returnError = require("./controllers/utils/return-error");

const app = express();

//Express middleware configuration
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || "localhost");

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());
}

//Adding routes
app.use(authenticationRoute);

app.use(auth.verifyJwt);
app.use(userRoute);
app.use(customerRoute);
app.use(eventTypeRoute);
app.use(establishmentRoute);
app.use(eventRoute);

app.use(returnError);
module.exports = app;