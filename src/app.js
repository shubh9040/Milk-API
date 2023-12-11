//Importing Packages
const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
// const apiRouter = require("./routers/api");
const publicDirectoryPath = path.join(__dirname, "../public/uploads");
require("./database/connection");
const app = express();
// app.use('../uploads', express.static('../uploads'));
// To display images stored in public/uploads folder
app.use("/public/uploads", express.static(publicDirectoryPath));
// To Handle responses, cookies, json and set header properties for all API.
app.use(cookieParser());
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", true);
  res.header("Access-Control-Allow-Credentials", "Content-Type");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept, x-client-key, x-client-token, x-client-secret, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});
// Routers for App(Api Router)
// app.use(apiRouter);

// Default Landing Page
app.get("/", (req, res) => {
  res.send("Hello Welcome To Milk Product App");
});

module.exports = app;
