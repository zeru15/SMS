const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sectionSchema = new Schema({

    sectionName:{
        type: String, 
    },
  
}, { timestamps: true });

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;