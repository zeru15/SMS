const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require("cors")
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }))
// Bodyparser Middleware
app.use(cors())
app.use(express.json());


// Use Routes
app.use('/api/newStudent', require('./routes/api/newStudent'))

// DB Config
const db = process.env.mongoURI;

//Connect to mongo
mongoose
   .connect(db)
   .then(() => console.log('MongoDB Connected Successfully!!!'))
   .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));