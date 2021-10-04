//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const router = require("./router");
const patientRegForm = require("./routes/patient");
const doctorRegForm = require("./routes/doctor");
const PharmecyRegForm = require("./routes/pharmecy");

const ejs = require("ejs");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const dataBaseIn = require("./dataSchema");
const passportLocalMongoose = require("passport-local-mongoose");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/iraqMedTestDB", {
  useNewUrlParser: true,
});
//mongoose.set("useCreateIndex", true);

app.use("/", router);
app.use("/", patientRegForm);
app.use("/", doctorRegForm);
app.use("/", PharmecyRegForm);

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
