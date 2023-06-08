const express = require('express')
const router = express.Router();
const newStudentsController = require('../../controllers/newStudents.controller')

const multer  = require("multer")
const upload = multer({ dest: 'uploads/' })


// @route POST api/newStudents
// @desc Register new student
// @access private
router.post('/', upload.single('img'),  newStudentsController.addNewStudent )


// @route GET api/newStudents
// @desc Get All New Students
// @access public
router.get('/', newStudentsController.getAllNewStudents)


// @route GET api/newStudents
// @desc Get All New Students
// @access public
router.put('/:id', newStudentsController.approveNewStudents)


module.exports = router;