const express = require('express')

//const Controller = require('./controller.js')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
//routes index
const routes = require('./routes/index.js')
app.use('/',routes)
//routes student
const studentRoutes = require('./routes/students.js')
app.use('/students',studentRoutes)
//routes teacher
const teacherRoutes = require('./routes/teachers.js')
app.use('/teachers',teacherRoutes)
app.listen(3000, () => console.log('Connection port 3000 !!'))