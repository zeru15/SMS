const express = require('express')
const router = express.Router();
const newStudentController = require('../../controllers/newStudent.controller')

const multer  = require("multer")
const upload = multer({ dest: 'uploads/' })


// @route POST api/newStudent
// @desc Register new student
// @access private
router.post('/', upload.single('img'),  newStudentController.addNewStudent )


// @route GET api/newStudent
// @desc Get All New Students
// @access public
router.get('/', newStudentController.getAllNewStudents)


module.exports = router;