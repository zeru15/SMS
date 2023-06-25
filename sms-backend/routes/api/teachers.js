const express = require('express')
const router = express.Router();
const teachersController = require('../../controllers/teachers.controller')

const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

// @route POST api/teachers
// @desc Register teachers
// @access private
router.post('/', upload.single('img'), teachersController.addTeacher )

// @route GET api/teachers
// @desc Get All Teachers
// @access public
router.get('/', teachersController.getAllTeachers)

// @route GET api/teachers/:id
// @desc Get Teacher Profile
// @access public
// router.get('/:id', teachersController.teacherProfile)

// @route GET api/teachers/:id
// @desc Get Teacher Profile
// @access public
// router.put('/:id', teachersController.assignSection)

module.exports = router;