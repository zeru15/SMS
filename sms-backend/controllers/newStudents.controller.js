const NewStudent = require('../models/NewStudent')

exports.addNewStudent = async (req, res, next) => {
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
    const newNewStudent = new NewStudent({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        parentEmail: req.body.parentEmail,
        gradeLevel: req.body.gradeLevel,
        // applicationLetter: req.body.applicationLetter,
        // transcript: file["url"]
    })
    await newNewStudent.save().then(newStudent => res.json(newStudent))
}

exports.getAllNewStudents = async (req, res, next) => {
    await NewStudent.find()
        .sort({ date: -1 })
        .then(newStudent => res.json(newStudent))
}


exports.approveNewStudents = async (req, res) => {
    try {
      const id = req.params.id;
      const newValue = req.body.isApproved;

      const newStudent = await NewStudent.findByIdAndUpdate(id, { isApproved: newValue }, { new: true });

      res.json({ message: 'Attribute successfully updated', newStudent });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }