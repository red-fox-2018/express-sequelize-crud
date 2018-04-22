var express = require('express')
var app = express()
let ejs = require('ejs')
var bodyParser = require('body-parser')
var teacherRoute= require("./routes/teacher-route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// app.get('/',function(res,res){
//     res.render('teacher')
// })
app.use("/",teacherRoute)

app.listen(5000)
