const AssignedSubject = require('../models/AssignedSubject')

exports.getAllAssignedSubjects = async (req, res, next) => {
    await AssignedSubject.find()
            .sort({ date: -1 })
            .then(subject => res.json(subject))
}

exports.deleteAssignedSubject = async (req, res,next) => {
    console.log('recieved',req.params.id);
    const tobedeleted = await AssignedSubject.findOneAndRemove({gradeLevelId: req.params.id, subjectName: req.body.subjectName})
    // deleteOne({_id:req.params.id})
    if(!tobedeleted){
      res.status(404).json({success : false})
      return
    }
    res.json({success : true, tobedeleted})
    // await Announcement.findById(req.params.id
    // .then(announcement => announcement.remove().then(() => res.json({success : true})))
    // .catch(err => res.status(404).json({success : false}))
    }