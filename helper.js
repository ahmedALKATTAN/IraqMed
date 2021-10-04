const dataBaseIn = require("./dataSchema");
const bcrypt = require("bcrypt");
const findTheAccount = require("./otherFunction").findTheAccount;

const PateintData = dataBaseIn.PateintData;
const DoctorData = dataBaseIn.DoctorData;
const PharmecyData = dataBaseIn.PharmecyData;

const testAccountType = async function (AccountType, username, password, res) {
  if (AccountType === "Patient") {
    const foundUser = await findTheAccount(
      PateintData,
      username,
      password,
      res
    );
    res.render("patientPage", { patientInfo: foundUser });

    //////  DOCTOR WORK //////////
  } else if (AccountType === "Doctor") {
    const DoctorID = await findTheAccount(DoctorData, username, password, res);
    //console.log(await DoctorID.patientArray);

    let padata = await PateintData.find({
      "PatientDoctor.DoctorID": DoctorID,
    });
    res.render("doctorPage", {
      patientData2: padata,

      DoctorID: DoctorID,
    });

    /////////////////////////////////////////////////////
  } else if (AccountType === "Pharmecy") {
    findTheAccount(PharmecyData, username, password, res);
    res.render("PharmecyRegForm");
  }
};

async function findDoctorPaitent(DoctorID) {
  await PateintData.findOne(
    { PatientDoctor: DoctorID },
    function (err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        if (foundUser) {
          console.log(foundUser);
          // res.render("patientPage", { patientInfo: foundUser });
        }
      }
    }
  );
}

module.exports = testAccountType;
