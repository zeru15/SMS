const NewTeacher = require('../models/NewTeacher')

exports.addNewTeacher = async (req, res, next) => {
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
    const newNewTeacher = new NewTeacher({
        teacherFirstName: req.body.teacherFirstName,
        teacherLastName: req.body.teacherLastName,
        teacherEmail: req.body.teacherEmail,
        applyingSubject: req.body.applyingSubject,
        // teacherApplicationLetter: req.body.teacherApplicationLetter,
        // cv: file["url"]
    })
    await newNewTeacher.save().then(newTeacher => res.json(newTeacher))
}

exports.getAllNewTeachers = async (req, res, next) => {
    await NewTeacher.find()
        .sort({ date: -1 })
        .then(newTeacher => res.json(newTeacher))
}


exports.approveNewTeachers = async (req, res) => {
    try {
      const id = req.params.id;
      const newValue = req.body.teacherIsApproved;

      const newTeacher = await NewTeacher.findByIdAndUpdate(id, { teacherIsApproved: newValue }, { new: true });

      res.json({ message: 'Attribute successfully updated', newTeacher });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }