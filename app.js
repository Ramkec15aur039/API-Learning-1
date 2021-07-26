//Libraries
const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDocs = require("swagger-jsdoc");

//To start express framework
const app = express();

//To connect data base
const url = "mongodb://localhost/details";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connection Holder (Handle)
const conObj = mongoose.connection; // Connection Object->To get hold on connect

//To trigger database connection
conObj.on("open", () => {
  console.log("Connected to the database...");
});

//Server and Port
app.listen(5500, () => {
  console.log("Server started at the port 5500...");
});

//To make express to accept json object from request body
app.use(express.json());

//Router
const detailsRouter = require("./routers/details");
const swaggerJSDoc = require("swagger-jsdoc");
app.use("/details", detailsRouter);

//Swagger Integration
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee Details",
      version: "1.0.0",
      description: "A sample CRUD API for learning purpose",
    },
    servers: [
      {
        url: "http://localhost:5500",
      },
    ],
  },
  apis: ["docs/*.yml", "./routers/*.js"]
};

const specs = swaggerJsDocs(options)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
