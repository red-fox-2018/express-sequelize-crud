var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var teacherRoute= require("./routes/teacher-route")

app.set('view engine', 'ejs');

app.use("/teacher",teacherRoute)

app.listen(7000, function() {
    console.log("Running on 7000")
})
