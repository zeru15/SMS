const express = require('express')
const router = express.Router();
const attendanceController = require('../../controllers/attendance.controller')


// @route POST api/attendance
// @desc Mark attendance of students
// @access private
router.post('/:id',  attendanceController.markAttendance )


module.exports = router;