const Section = require('../models/Section')

exports.addSection = async (req, res) => {
    console.log("sec", req.body.sectionName)
    
    const newSection = new Section({
        sectionName: req.body.sectionName
    })
    await newSection.save().then(section => res.json(section))
}

exports.getAllSections = async (req, res, next) => {
    await Section.find()
            .sort({ date: -1 })
            .then(section => res.json(section))
}
