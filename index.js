/*
   Name : index.js
*/

/** ***************** Models Import ******************************************************** */
const mongoose = require("mongoose");
const app = require("./app");
const logger = require("./config/logger");

let server;
let db;
try {
  //To connect data base
  const url = "mongodb://localhost/Node_Express_MongoDB_API_Learning";
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      logger.info("Connected to MongoDB");
      server = app.listen(5500, () => {
        logger.info(`Listening to port 5500`);
      });
    });
  db = mongoose.connection;
  const exitHandler = () => {
    if (server) {
      server.close(() => {
        logger.info("Server closed");
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  };
  const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
  };

  process.on("uncaughtException", unexpectedErrorHandler);
  process.on("unhandledRejection", unexpectedErrorHandler);

  process.on("SIGTERM", () => {
    logger.info("SIGTERM received");
    if (server) {
      server.close();
    }
  });
} catch (e) {
  logger.error(e);
}
module.exports = { db };
