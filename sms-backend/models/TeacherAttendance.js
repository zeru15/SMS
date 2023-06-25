const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

// Teacher Attendance schema
const teacherAttendanceSchema = new Schema({

    teacherId: { 
        type: String, 
        // ref: 'Student', 
    },
    isPresent: { 
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
  }, { timestamps: true });

  const TeacherAttendance = mongoose.model('TeacherAttendance', teacherAttendanceSchema);

  module.exports = TeacherAttendance;