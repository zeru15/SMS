const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: { 
        type: String, 
        // enum: ['student', 'teacher', 'parent', 'recordOfficer', 'director'], 
        default: 'student',
        required: true
    }
},
    { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;