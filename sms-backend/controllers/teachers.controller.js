const Teacher = require('../models/Teacher')

exports.addTeacher = async (req, res,next) => {
// console.log("body")
const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
  cloud_name: "dzalpusxw",
  api_key: "733829174818648",
  api_secret: "5u3CwWI96oOVHo7oGRxcCJ-tpto"
});
// const file = await cloudinary.uploader.upload(req.file.path, {public_id: req.file.originalname})
// console.log(image)
// console.log(req.body)
// console.log(req.file);
// res.json({message:"Hello",body:req.body})
const newTeacher = new Teacher({
    teacherFirstName: req.body.teacherFirstName,
    teacherLastName: req.body.teacherLastName,
    teacherEmail: req.body.teacherEmail,
    // password: req.body.password,
    // phone: req.body.phone,
    // dateOfBirth: req.body.dateOfBirth,
    // sex: req.body.sex,
    // nationality: req.body.nationality,
    // region: req.body.region,
    // city: req.body.city,
    // subCity: req.body.subCity,
    // kebele: req.body.kebele,
    // houseNumber: req.body.houseNumber,
    // height: req.body.height,
    // weight: req.body.weight,
    // bloodType: req.body.bloodType,
    // eyeColor: req.body.eyeColor,
    // medicalStatus: req.body.medicalStatus,
    teachingSubject: req.body.applyingSubject,
    // parentPhone: req.body.parentPhone,
    // // img: file["url"],
})
await newTeacher.save().then(teacher => res.json(teacher))
}

exports.getAllTeachers = async (req, res, next) => {
await Teacher.find()
.sort({ date: -1 })
.then(teacher => res.json(teacher))
}

// exports.teacherProfile = async (req, res) => {
// console.log(req.params)

// try {
//     const id = req.params.id;

//     const teacherProfile = await Teacher.findById(id)

//     res.json({teacherProfile})
// } catch (err) {
//     res.status(400).json({ error: err });
// }
// }

// exports.assignSection = async (req, res) => {

// try {
//     const id = req.params.id;
//     const newValue = req.body.section;

//     const teacher = await Teacher.findByIdAndUpdate(id, { section: newValue }, { new: true });

//     res.json({ message: 'Section successfully assigned!', teacher });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// }