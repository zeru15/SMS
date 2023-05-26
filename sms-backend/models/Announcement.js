const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

// Announcement schema
const announcementSchema = new Schema({

    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true
     },
    createdBy: { 
        type: mongoose.Types.ObjectId, 
        ref: 'User', 
        // required: true 
    }
  }, { timestamps: true });

  const Announcement = mongoose.model('Announcement', announcementSchema);

  module.exports = Announcement;