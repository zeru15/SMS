const Attendance = require('../models/Attendance')

exports.markAttendance = async (req, res) => {
  console.log('recieved', req.params);
  console.log("isPresent", req.body.isPresent)
  console.log("date", req.body.date)
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

exports.getAttendance = async (req, res, next) => {

  const studentAttendances = await Attendance.find({ studentId: req.params.id, isPresent: false });

  res.json(studentAttendances)

}
