const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

// Attendance schema
const attendanceSchema = new Schema({

    studentId: { 
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

  const Attendance = mongoose.model('Attendance', attendanceSchema);

  module.exports = Attendance;