const express = require("express");
const cors = require('cors')
const app = express();


//settings
app.set('port', process.env.PORT || 4000)

//middleware
app.use(cors());
app.use(express.json())

//routes
app.use('/logins', require('./routes/logins'));
app.use('/users', require('./routes/users'));

module.exports = app;