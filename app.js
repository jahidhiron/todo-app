const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

// environment variable
dotenv.config();

// init app
const app = express();

// mongodb connection
connectMongodb();

// view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", todoRoute);

module.exports = app;
