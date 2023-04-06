const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");
const error=require('./middleware/fileCallError');
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
//Load env variables
dotenv.config({ path: "./config/config.env" });
const colors=require('colors');

//Connect to DB


connectDB();


//Load route files
const packages = require("./routes/packages");
const app = express();
app.use(express.json());

//Mount routers
if (process.env.NODE_ENV === "development") {
    app.use(logger);
  }

app.use("/api/v1/packages", packages);


app.use(error);
const PORT = process.env.PORT;
const server = app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} node on PORT ${PORT}`.yellow.bold
  )
);

//Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red.underline);
    //Close server & exit process
    server.close(() => process.exit(1));
    }
);
