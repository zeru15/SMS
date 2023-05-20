const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newStudentSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
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
        type: Number, 
        required: true 
    },
    applicationLetter: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        // required: true
    }
}, { timestamps: true });

const NewStudent = mongoose.model("NewStudent", newStudentSchema);

module.exports = NewStudent;