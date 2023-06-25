const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uuid = require('uuid'); // to generate temporary credentials
const nodemailer = require('nodemailer');


// User Model
const User = require('./../models/User')

// @route POST api/users
// @desc Post User
// @access public
exports.addUser = (req, res) => {
    const  email  = req.body.email
    const  role  = req.body.role

    console.log({email})
    console.log({role})

    // Generate temporary credentials
    const password = uuid.v4();

    // //Simple Validation
    // if (!email || !password) {
    //     return res.status(400).json({ msg: 'Please Enter All Fields' })
    // }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' })

            const newUser = new User({
                email,
                password,
                role
            });


            // Send email with temporary credentials
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'zeruf5@gmail.com',
                    pass: process.env.nodemailer_pass
                },
                tls: {
                    rejectUnauthorized: false
                }
            });

            const mailOptions = {
                from: 'zeruf5@gmail.com',
                to: email,
                subject: 'Congratulation You have been accepted!',
                text: `We are happy to announce you that you have been accepted to be part of our school. ${"\n"}${"\n"} Your temporary login credentials are ${"\n"}${"\n"} email: ${email} ${"\n"} password: "${password}"`
            };

            transporter.sendMail(mailOptions, async (error, info) => {
                if (error) {
                    console.log(error);
                    res.status(500).send('Error sending email');
                } else {
                    console.log('Email sent: ' + info.response);

                    // // Save temporary credentials to database
                    // const client = await MongoClient.connect(url);
                    // const db = client.db(dbName);

                    // await db.collection('tempCredentials').insertOne({
                    //     email,
                    //     tempCreds
                    // });

                    // client.close();

                    //Create salt & hash
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err;
                            newUser.password = hash;
                            newUser.save()
                                .then(user => {

                                    jwt.sign(
                                        { id: user.id },
                                        process.env.jwtSecret,
                                        { expiresIn: 3600 },
                                        (err, token) => {
                                            if (err) throw err;

                                            res.json({
                                                token,
                                                user: {
                                                    id: user.id,
                                                    email: user.email,
                                                    role: user.role
                                                }
                                            });

                                        }
                                    )
                                })
                        })
                    })

                    res.status(200).send('Temporary credentials sent to email');
                }
            });

        })
}

exports.rejectUser = (req, res) => {
    const { email } = req.body

    // Send email with temporary credentials
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zeruf5@gmail.com',
            pass: process.env.nodemailer_pass
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'zeruf5@gmail.com',
        to: email,
        subject: 'Your application has been rejected!',
        text: `We have carefully reviewed your application and you have not been accepted to be part of our school.${"\n"}${"\n"} For further information you can call us through 0911000000 or contact us in person.`
    };

    transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
        }
        res.status(200).send('Rejection letter sent to email');
    });
}