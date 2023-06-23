const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newTeacherSchema = new Schema({

    teacherFirstName: {
        type: String,
        required: true
    },
    teacherLastName: {
        type: String,
        required: true
    },
    teacherEmail: {
        type: String,
        required: true,
        unique: true
    },
    applyingSubject: {
        type: String, 
        required: true 
    },
    teacherApplicationLetter: {
        type: String,
        // required: true
    },
    cv: {
        type: String,
        // required: true
    },
    teacherIsApproved: {
        type: Boolean,
        default: null
    }
}, { timestamps: true });

const NewTeacher = mongoose.model("NewTeacher", newTeacherSchema);

module.exports = NewTeacher;