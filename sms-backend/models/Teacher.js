const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const teacherSchema = new Schema ({

    teacherFirstName: {
        type: String,
        required: true
    },
    teacherLastName: {
        type: String,
        required: true
    },
    teacherEmail : {
        type: String,
        required: true,
        unique: true
    },
    // teacherPassword : {
    //     type: String,
    //     required: true
    // },
    teacherPhone: { 
        type: String
    },
    teacherDateOfBirth: { 
        type: String 
    },
    teacherSex: {
        type: String
    },
    teacherNationality: {
        type: String
    },
    teachingSubject:{
        type:String,
        required: true
    },
    teacherQualification:{
        type:String,
    },
    img:{
        type:String,
        default:"https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    },
},{ timestamps: true })

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;