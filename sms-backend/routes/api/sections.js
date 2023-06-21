const express = require('express')
const router = express.Router();
const sectionController = require('../../controllers/section.controller')



// @route POST api/sections
// @desc Register sections
// @access private
router.post('/', sectionController.addSection )


// @route GET api/sections
// @desc Get All Sections
// @access public
router.get('/', sectionController.getAllSections)


module.exports = router;