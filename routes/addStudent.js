const app = require('express').Router();
const db = require('../models/index.js')

app.get('/', (req,res)=>{
    res.render('../views/addStudent.ejs')
})
app.post('/', (req,res)=>{
    db.Student.create({
        first_name : `${req.body.firstName}`,
        last_name: `${req.body.lastName}`,
        email: `${req.body.e_mail}`,
        createdAt : new Date(),
        updatedAt : new Date()
    })
    res.send('Student has been added successfully <br>'+'<a href="/students">Show All Data</a>')
})
module.exports = app;