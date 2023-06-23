const express = require('express')
const router = express.Router();
const newTeachersController = require('../../controllers/newTeachers.controller')

const multer  = require("multer")
const upload = multer({ dest: 'uploads/' })


// @route POST api/newStudents
// @desc Register new student
// @access private
router.post('/', upload.single('img'),  newTeachersController.addNewTeacher )


// @route GET api/newStudents
// @desc Get All New Students
// @access public
// router.get('/', newTeachersController.getAllNewTeachers)


// @route GET api/newStudents
// @desc Get All New Students
// @access public
// router.put('/:id', newTeachersController.approveNewTeachers)


module.exports = router;