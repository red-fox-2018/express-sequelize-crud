const express = require('express')
const app = express()
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
  extended: false
}))
app.set('view engine', 'ejs')

let homeRoutes = require('./routes/home.js');
app.use('/', homeRoutes);

let studentRoutes = require('./routes/student.js')
app.use('/students', studentRoutes)

let addStudentRoutes = require('./routes/addStudent.js')
app.use('/students/add', addStudentRoutes)

let editStudentRoutes = require('./routes/editStudent.js')
app.use('/students/edit/:id', addStudentRoutes)

let teacherRoutes = require('./routes/teacher.js')
app.use('/teachers', teacherRoutes)

app.listen(3000,function(){
    console.log('listening to post 3000'); 
})