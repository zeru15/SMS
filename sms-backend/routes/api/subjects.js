const express = require('express')
const router = express.Router();
const subjectController = require('../../controllers/subject.controller')


// @route POST api/subjects
// @desc Register subjects
// @access private
router.post('/', subjectController.addSubject )


// @route GET api/subjects
// @desc Get All Subjects
// @access public
router.get('/', subjectController.getAllSubjects)


// @route POST api/subjects/:id
// @desc Assign subject to section
// @access public
router.post('/:id', subjectController.assignSubject)


module.exports = router;