const Announcement = require('./../models/Announcement')


exports.addAnnouncement = async (req, res) => {
    try {
      const announcement = new Announcement({
        title: req.body.title,
        description: req.body.description,
        // createdBy: req.user._id
      });
      await announcement.save();
      res.status(201).send(announcement);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }


  exports.getAllAnnouncements = async (req, res) => {
    try {
      const announcements = await Announcement.find();
      res.send(announcements);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }