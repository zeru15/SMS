const express = require('express')
const router = express.Router();
const teacherAttendanceController = require('../../controllers/teacherAttendance.controller')


// @route POST api/attendance
// @desc Mark attendance of students
// @access private
router.post('/:id',  teacherAttendanceController.markAttendance )


module.exports = router;