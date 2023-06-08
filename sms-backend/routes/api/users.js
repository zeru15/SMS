const express = require('express')
const router = express.Router();

const usercontroller = require("../../controllers/user.controller")


// @route POST api/users
// @desc ADD User
// @access public
router.post('/', usercontroller.addUser );


// @route POST api/users
// @desc Reject User
// @access public
router.post('/reject', usercontroller.rejectUser );


module.exports = router;