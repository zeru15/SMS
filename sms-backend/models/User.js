const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema ({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    studentId: {
        type: String,
        required: true
    },
    studentEmail : {
        type: String,
        required: true,
        unique: true
    },
    parentEmail: {
        type: String,
        required: true,
    },
    teacherEmail: {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true
    },
    phone: { 
        type: String
    },
    parentphone: { 
        type: String
    },
    gradeLevel:{
        type: mongoose.Types.ObjectId, 
        ref: 'GradeLevel', 
    },
    roll_No:{
        type:String,
    },
    section: {
        type: mongoose.Types.ObjectId, 
        ref: 'Section', 
    },
    teaching_subject:{
        type:String,
    },
    teacher_qualification:{
        type:String,
    },
    role: { 
        type: String, 
        enum: ['student', 'teacher', 'parent', 'recordOfficer', 'director'], 
        default: 'student',
        required: true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    },
    attendance: [],
    grades: [],
},{ timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;