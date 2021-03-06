/*
   Name : app.js
*/

/** ***************** Models Import ******************************************************** */
const express = require("express");
const routes = require("./routes/v1");
const { errorConverter, errorHandler } = require("./middleware/error");
const morgan = require('./config/morgan');

//To start express framework
const app = express();

//Logger Section
app.use(morgan.successHandler);
app.use(morgan.errorHandler);

//To make express to accept json object from request body
app.use(express.json());

//Router
app.use("/v1", routes);

/* API Error Handling*/
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
