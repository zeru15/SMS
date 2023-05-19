const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

// Attendance schema
const attendanceSchema = new Schema({

    student: { 
        type: mongoose.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    isPresent: { 
        type: Boolean, 
        default: false 
    }
  }, { timestamps: true });

  const Attendance = mongoose.model('Attendance', attendanceSchema);

  module.exports = Attendance;