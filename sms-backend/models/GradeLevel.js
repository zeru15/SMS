const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gradeLevelSchema = new Schema({

    gradeLevel:{
        type: String, 
    },
  
}, { timestamps: true });

const GradeLevel = mongoose.model("Section", gradeLevelSchema);

module.exports = GradeLevel;