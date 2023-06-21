const Subject = require('../models/Subject')

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
      const attendance = new Attendance({
        studentId: req.params.id,
        isPresent: req.body.isPresent,
        date: req.body.date
      })
  
      // Check if attendance for the student on the current date already exists
      const existingAttendance = await Attendance.findOne({ studentId: req.params.id, date: req.body.date });
      if (existingAttendance) {
        console.log('Attendance already marked for the student on the current date')
        res.status(400).json({ message: 'Attendance already marked for the student on the current date' });
      }
      else {
        await attendance.save();
        res.status(200).json({ message: 'Attendance data added successfully' });
      }
    } catch (err) {
      console.log(`Error adding attendance data: ${err}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  }