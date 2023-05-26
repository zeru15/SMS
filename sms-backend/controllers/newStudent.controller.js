const NewStudent = require('../models/NewStudent')

exports.addNewStudent = async (req, res,next) => {
    // console.log("body")
    const cloudinary = require('cloudinary').v2;

    // Configuration 
    cloudinary.config({
      cloud_name: "dzalpusxw",
      api_key: "733829174818648",
      api_secret: "5u3CwWI96oOVHo7oGRxcCJ-tpto"
    });
    const file = await cloudinary.uploader.upload(req.file.path, {public_id: req.file.originalname})
    // console.log(image)
    // console.log(req.body)
    // console.log(req.file);
    // res.json({message:"Hello",body:req.body})
    const newNewStudent = new NewStudent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        studentEmail: req.body.studentEmail,
        parentEmail: req.body.parentEmail,
        gradeLevel: req.body.gradeLevel,
        applicationLetter: req.body.applicationLetter,
        transcript: file["url"]
    })
    await newNewStudent.save().then(newStudent => res.json(newStudent))
}

exports.getAllNewStudents = async (req, res, next) => {
    await NewStudent.find()
            .sort({ date: -1 })
            .then(newStudent => res.json(newStudent))
}