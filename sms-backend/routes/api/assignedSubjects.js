const express = require('express')
const router = express.Router();
const assignedSubjectController = require('../../controllers/assignedSubject.controller')


// @route GET api/assignedSections
// @desc Get All Assigned Sections
// @access public
router.get('/', assignedSubjectController.getAllAssignedSubjects)


// @route DELETE api/assignedSections/:id
// @desc Delete assigned Subject
// @access public
router.delete('/:id', assignedSubjectController.deleteAssignedSubject)


module.exports = router;