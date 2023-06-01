const Announcement = require('./../models/Announcement')


exports.addAnnouncement = async (req, res) => {
    
      const announcement = new Announcement({
        title: req.body.title,
        subtitle: req.body.subtitle,
        message: req.body.message,
        // createdBy: req.user._id
      });
      await announcement.save();
      res.status(201).send(announcement);
    
  }


  exports.getAllAnnouncements = async (req, res) => {
    try {
      const announcements = await Announcement.find();
      res.send(announcements);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }


  exports.deleteAnnouncement = async (req, res,next) => {
    await Announcement.findById(req.params.id)
    .then(announcement => announcement.remove().then(() => res.json({success : true})))
    .catch(err => res.status(404).json({success : false}))
    }