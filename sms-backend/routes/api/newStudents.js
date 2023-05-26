const express = require('express')
const router = express.Router();
const newStudentsController = require('../../controllers/newStudents.controller')

const multer  = require("multer")
const upload = multer({ dest: 'uploads/' })


// @route POST api/newStudent
// @desc Register new student
// @access private
router.post('/', upload.single('img'),  newStudentsController.addNewStudent )


// @route GET api/newStudent
// @desc Get All New Students
// @access public
router.get('/', newStudentsController.getAllNewStudents)


module.exports = router;