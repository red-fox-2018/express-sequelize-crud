/*jshint esversion:6*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs');
app.use('/', require('./routes/index'));
app.use('/teacher',require('./routes/teacher.js'));





app.listen(3000);
