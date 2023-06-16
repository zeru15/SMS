const Attendance = require('../models/Attendance')

exports.markAttendance = async (req, res) => {
  console.log('recieved',req.params);
  console.log("isPresent", req.body.isPresent)
    try {
    const attendance = new Attendance({
        studentId: req.params.id,
        isPresent: req.body.isPresent
    })
    //   student.attendance.push(attendanceData);
      await attendance.save();
      res.status(200).json({ message: 'Attendance data added successfully' });
    } catch (err) {
      console.log(`Error adding attendance data: ${err}`);
      res.status(500).json({ error: 'Internal server error' });
    }
}