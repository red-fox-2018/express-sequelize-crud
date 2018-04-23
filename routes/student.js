const app = require('express').Router();
const db = require('../models/index.js')

app.get('/', (req,res)=>{
    db.Student.findAll().then(students => {
        res.render('../views/student.ejs', {
            students: students
        })
    })
})
module.exports = app;