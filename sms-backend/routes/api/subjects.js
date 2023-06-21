const express = require('express')
const router = express.Router();
const subjectController = require('../../controllers/subject.controller')


// @route POST api/sections
// @desc Register sections
// @access private
router.post('/', subjectController.addSubject )


// @route GET api/sections
// @desc Get All Sections
// @access public
router.get('/', subjectController.getAllSsubjects)


module.exports = router;