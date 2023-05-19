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
    email : {
        type: String,
        required: true,
        unique: true
    },
    parentEmail: {
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
    gradeLevel:{
        type: mongoose.Types.ObjectId, 
        ref: 'GradeLevel', 
    },
    roll_No:{
        type:String,
    },
    section: {
        type:String
    },
    teaching_subject:{
        type:String,
    },
    qulification:{
        type:String,
    },
    role: { 
        type: String, 
        enum: ['student', 'teacher', 'parent', 'recordOfficer', 'director'], 
        default: 'student' 
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