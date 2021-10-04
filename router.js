const { render } = require("ejs");
const User = require("./dataSchema");

const router = require("express").Router();
const testAccountType = require("./helper");
const dataBaseIn = require("./dataSchema");
const ID_Generastor = require("./otherFunction");
const ejs = require("ejs");
const path = require("path");
const pdf = require("html-pdf");

const PateintData = dataBaseIn.PateintData;
const DoctorData = dataBaseIn.DoctorData;
const PharmecyData = dataBaseIn.PharmecyData;
const PateintRoute = require("./routes/patient");
router.get("/", function (req, res) {
  res.render("home");
});

///Google Authuntication
let AccountType;

//////////
router.get("/login", function (req, res) {
  AccountType = req.query.AccountType;
  //console.log(AccountType);
  res.render("login", { AccountType: AccountType });
});

router.get("/secrets", function (req, res) {
  res.render("secrets");
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const doctorIDG = await testAccountType(AccountType, username, password, res);

  // console.log("tttt");

  //console.log(doctorIDG);
});

module.exports = router;
