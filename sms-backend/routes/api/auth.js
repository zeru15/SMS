const express = require('express')
const router = express.Router();
const auth = require('./../../middleware/auth')

const authController = require("../../controllers/auth.controller")


// @route POST api/auth
// @desc Auth User
// @access public
router.post('/', authController.authUser);


// @route GET api/auth/user
// @desc Get user data
// @access private
router.get('/user', auth, authController.userData);


router.get('/changePassword', authController.changePassword)

module.exports = router;