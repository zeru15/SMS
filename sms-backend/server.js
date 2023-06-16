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
app.use((req,_,___)=>{console.log(req.body);___()})
app.use('/api/newStudents', require('./routes/api/newStudents'))
app.use('/api/announcements', require('./routes/api/announcements'))
app.use('/api/students', require('./routes/api/students'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/attendance', require('./routes/api/attendance'))

// DB Config
const db = process.env.mongoURI;

//Connect to mongo
mongoose
   .connect(db, {
      useNewUrlParser: true
})
   .then(() => console.log('MongoDB Connected Successfully!!!'))
   .catch(err => console.log(err));
   

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
   //Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));