const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // studentId: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    sex: {
        type: String
    },
    nationality: {
        type: String
    },
    region: {
        type: String
    },
    city: {
        type: String
    },
    subCity: {
        type: String
    },
    kebele: {
        type: String
    },
    houseNumber: {
        type: Number
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    bloodType: {
        type: String
    },
    eyeColor: {
        type: String
    },
    medicalStatus: {
        type: String
    },
    parentFirstName: {
        type: String,
        required: true
    },
    parentLastName: {
        type: String,
        required: true
    },
    parentEmail: {
        type: String,
        required: true,
    },
    parentPhone: {
        type: String,
        required: true
    },
    gradeLevel: {
        type: String,
        // ref: 'GradeLevel',
        default: null
    },
    // roll_No:{
    //     type:String,
    // },
    section: {
        type: String,
        // ref: 'Section',
        default: null
    },
    role: {
        type: String,
        // enum: ['student', 'teacher', 'parent', 'recordOfficer', 'director'], 
        default: 'student',
        required: true
    },
    img: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    },
    // attendance: [],
    // grades: [],
}, { timestamps: true })

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;