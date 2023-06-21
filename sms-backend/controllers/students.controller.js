const Student = require('../models/Student')

exports.addStudent = async (req, res,next) => {
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
    const newStudent = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        dateOfBirth: req.body.dateOfBirth,
        sex: req.body.sex,
        nationality: req.body.nationality,
        region: req.body.region,
        city: req.body.city,
        subCity: req.body.subCity,
        kebele: req.body.kebele,
        houseNumber: req.body.houseNumber,
        height: req.body.height,
        weight: req.body.weight,
        bloodType: req.body.bloodType,
        eyeColor: req.body.eyeColor,
        medicalStatus: req.body.medicalStatus,
        parentFirstName: req.body.parentFirstName,
        parentLastName: req.body.parentLastName,
        parentEmail: req.body.parentEmail,
        parentPhone: req.body.parentPhone,
        // img: file["url"],
    })
    await newStudent.save().then(student => res.json(student))
}

exports.getAllStudents = async (req, res, next) => {
    await Student.find()
            .sort({ date: -1 })
            .then(student => res.json(student))
}


exports.studentProfile = async (req, res) => {
    console.log(req.params)

    try {
        const id = req.params.id;

        const studentProfile = await Student.findById(id)

        res.json({studentProfile})
    } catch (err) {
        res.status(400).json({ error: err });
    }
}

exports.assignSection = async (req, res) => {

    try {
        const id = req.params.id;
        const newValue = req.body.section;
  
        const student = await Student.findByIdAndUpdate(id, { section: newValue }, { new: true });
  
        res.json({ message: 'Section successfully assigned!', student });
      } catch (err) {
        res.status(500).json({ error: err });
      }
}