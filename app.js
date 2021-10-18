//Libraries
const express = require("express");
const mongoose = require("mongoose");

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
app.use("/details", detailsRouter);


