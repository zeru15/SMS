const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = process.env.mongoURI;

//Connect to mongo
mongoose
   .connect(db)
   .then(() => console.log('MongoDB Connected Successfully!!!'))
   .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));