const express = require('express')
const router = express.Router();
const announcementController = require('./../../controllers/announcements.controller')



// @route POST api/announcements
// @desc Adding an announcement
// @access private
router.post('/', announcementController.addAnnouncement)


// @route POST api/announcements
// @desc Getting All Announcements
// @access private
router.get('/', announcementController.getAllAnnouncements)


// @route DELETE api/announcements/:id
// @desc delete an announcement
// @access private
router.delete('/:id', announcementController.deleteAnnouncement)

module.exports = router;