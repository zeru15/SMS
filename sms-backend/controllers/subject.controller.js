const Subject = require('../models/Subject')
const AssignedSubject = require('../models/AssignedSubject')

exports.addSubject = async (req, res) => {
    
    const newSubject = new Subject({
        subjectName: req.body.subjectName
    })
    await newSubject.save().then(subject => res.json(subject))
}

exports.getAllSubjects = async (req, res, next) => {
    await Subject.find()
            .sort({ date: -1 })
            .then(subject => res.json(subject))
}

exports.assignSubject = async (req, res) => {
    
    try {
      const assignedSubject = new AssignedSubject({
        sectionId: req.params.id,
        subjectName: req.body.subjectName,
      })
  
      // Check if subject for the section is already assigned
      const existingAssignedSubject = await AssignedSubject.findOne({ sectionId: req.params.id, subjectName: req.body.subjectName });
      if (existingAssignedSubject) {
        console.log('Subject Already assigned for this section')
        res.status(400).json({ message: 'Subject Already assigned for this section' });
      }
      else {
        await assignedSubject.save();
        res.status(200).json({ message: 'Subject assigned successfully' });
      }
    } catch (err) {
      console.log(`Error assigning subject: ${err}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

