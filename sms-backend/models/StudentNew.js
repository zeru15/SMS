const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentNewSchema = new Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    },
    parentEmail: {
        type: String,
        required: true
    },
    gradeLevel: {
        type: mongoose.Types.ObjectId, 
        ref: 'GradeLevel', 
        required: true 
    },
    applicationLetter: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        required: true
    }
}, { timestamps: true });

const StudentNew = mongoose.model("StudentNew", studentNewSchema);

module.exports = StudentNew;