const https = require("https");
const bcrypt = require("bcrypt");
const { use } = require("passport");

const ID_Generastor = function () {
  return Math.random().toString(36).substr(2, 4).toLocaleUpperCase();
};

//exports.ID_Generastor2 = ID_Generastor();

async function findTheAccount(inData, username, password, res) {
  let user = await inData.findOne({ username: username });
  if (!user) {
    return res.status(404).send("Invalid Eemail or password");
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(404).send("Invalid Eemail or password");
  }
  // res.render("secrets");

  return user;
}

module.exports = { findTheAccount, ID_Generastor };
