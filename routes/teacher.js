const app = require('express').Router();
const db = require('../models/index.js')


app.get('/', (req,res)=>{
    db.Teacher.findAll().then(teachers => {
        res.render('../views/teacher.ejs', {
            teachers: teachers
        })
    })
})
module.exports = app;