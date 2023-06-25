const GradeLevel = require('../models/GradeLevel')

exports.addGradeLevel = async (req, res) => {
    console.log("sec", req.body.gradeLevel)
    
    const newGradeLevel = new GradeLevel({
        gradeLevel: req.body.gradeLevel
    })
    await newGradeLevel.save().then(gradeLevel => res.json(gradeLevel))
}

exports.getAllGradeLevels = async (req, res, next) => {
    await GradeLevel.find()
            .sort({ date: -1 })
            .then(gradeLevel => res.json(gradeLevel))
}
