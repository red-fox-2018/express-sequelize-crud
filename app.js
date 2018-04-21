const express = require('express');
const app = express();
const router = require('./routes');
const teacher = require('./routes/teacher.js');
const subject = require('./routes/subject')

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.use('/', router);
app.use('/students', router);
app.use('/students/add', router);
app.use('/students/edit', router);
app.use('/students/delete', router);

app.use('/', teacher)
app.use('/teachers', teacher);
app.use('/teachers/add', teacher);
app.use('/teachers/edit', teacher);
app.use('/teachers/delete', teacher);

app.use('/', subject)
app.use('/subjects', subject);
app.use('/subjects/add', subject);
app.use('/subjects/edit', subject);
app.use('/subjects/delete', subject);

app.listen(3000);