const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const index = require('./routes/index')
const students = require('./routes/students')
const teachers = require('./routes/teachers')
const subjects = require('./routes/subjects')


app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')

app.use('/',index)
app.use('/students',students)
app.use('/teachers',teachers)
app.use('/subjects',subjects)

app.listen(3000)