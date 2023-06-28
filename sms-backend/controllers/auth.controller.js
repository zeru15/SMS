const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


// User Model
const User = require('./../models/User')

// @route POST api/auth
// @desc Auth user
// @access public
exports.authUser = (req, res) => {
    const { email, password } = req.body

    //Simple Validation
    if( !email || !password) {
        return res.status(400).json({ msg : 'Please Enter All Fields '})
    }

    //Check for existing user
    User.findOne({ email }) 
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exist' })

            // Validate password
            bcrypt.compare(password, user.password)
                  .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials'})

                    jwt.sign(
                        {id: user.id},
                        process.env.jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if(err) throw err;

                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    email: user.email
                                }
                            });

                        }
                    )
                  });
        });
};

exports.userData = (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
}

exports.changePassword = (req, res) => {
    
}