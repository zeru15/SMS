const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assignedSubjectSchema = new Schema({

    gradeLevelId: {
        type: String
    },
    subjectName:{
        type: String, 
        required: true
    }
  
}, { timestamps: true });

const AssignedSubject = mongoose.model("AssignedSubject", assignedSubjectSchema);

module.exports = AssignedSubject;