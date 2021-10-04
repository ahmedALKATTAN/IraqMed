const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
const passportLocalMongoose = require("passport-local-mongoose");

const doctorSchema = new mongoose.Schema({
  DoctorName: String,
  username: String,
  surname: String,
  googleId: String,
  Phone: Number,
  Field: String,
  Adress: String,
  DoctorID: String,
  password: String,

  City: String,
  patientArray: [
    {
      username: String,
      name: String,
      surname: String,
      patientID: String,
      Age: String,
      Note: String,
    },
  ],
});

const patientSchema = new mongoose.Schema({
  username: String,
  name: String,
  surname: String,
  password: String,
  googleId: String,
  Phone: Number,
  City: String,
  Age: Number,
  patientID: String,
  PatientDoctor: [
    {
      doctorID: String,
    },
  ],

  medication: [
    {
      medicationName: String,
      Using: String,
      lastDateOfUsing: String,
    },
  ],
});

const pharmecySchema = new mongoose.Schema({
  PharmecyName: String,
  username: String,
  password: String,
  OwnerName: String,
  googleId: String,
  Phone: Number,
  Adress: String,
  City: String,
});

///Patient Reg DatatBase
// patientSchema.plugin(passportLocalMongoose);
// patientSchema.plugin(findOrCreate);
// /// Doctor Reg DataBase
// doctorSchema.plugin(passportLocalMongoose);
// doctorSchema.plugin(findOrCreate);
// /// Pharmecy Reg DataBase
// pharmecySchema.plugin(passportLocalMongoose);
// pharmecySchema.plugin(findOrCreate);

// // //////////
// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

const PateintData = new mongoose.model("PateintData", patientSchema);
const DoctorData = new mongoose.model("DoctorData", doctorSchema);
const PharmecyData = new mongoose.model("PharmecyData", pharmecySchema);

// module.exports = User;
// module.exports = PateintData;
// module.exports = DoctorData;
// module.exports = PharmecyData;
// exports.PateintData = PateintData;
// exports.DoctorData = DoctorData;
// exports.PharmecyData = PharmecyData;
module.exports = { PateintData, DoctorData, PharmecyData };
//(module.exports = PateintData), DoctorData, PharmecyData;

// patientArray: [
//   {
//     patientName: String,
//     patientSurName: String,
//     patientID: String,
//     Age: String,
//     medicationData: [
//       {
//         medName: String,
//         using: String,
//       },
//     ],
//   },
// ],
