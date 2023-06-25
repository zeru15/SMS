const express = require('express')
const router = express.Router();
const gradeLevelController = require('../../controllers/gradeLevel.controller')



// @route POST api/sections
// @desc Register sections
// @access private
router.post('/', gradeLevelController.addGradeLevel )


// @route GET api/sections
// @desc Get All Sections
// @access public
router.get('/', gradeLevelController.getAllGradeLevels)


module.exports = router;