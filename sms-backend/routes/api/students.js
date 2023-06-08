const express = require('express')
const router = express.Router();
const studentsController = require('../../controllers/students.controller')

const multer  = require("multer")
const upload = multer({ dest: 'uploads/' })


// @route POST api/students
// @desc Register students
// @access private
router.post('/', upload.single('img'),  studentsController.addStudent )


// @route GET api/students
// @desc Get All Studentss
// @access public
router.get('/', studentsController.getAllStudents)


module.exports = router;