const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const gradeSchema = new Schema({

    student: { 
        type: mongoose.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    subject: { 
        type: mongoose.Types.ObjectId, 
        ref: 'Subject',  
        required: true 
    },
    test1: { 
        type: Number, 
        required: true 
    },
    test2: { 
        type: Number, 
        required: true 
    },
    assignment: { 
        type: Number, 
        required: true 
    },
    final: {
        type: Number,
        required: true
    },
    // maxMarks: { 
    //     type: Number, 
    //     required: true 
    // }
  }, { timestamps: true });

  const Grade = mongoose.model('Grade', gradeSchema);

  modeule.exports = Grade;