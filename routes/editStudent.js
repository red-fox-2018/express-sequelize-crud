const app = require('express').Router();
const db = require('../models/index.js')

app.get('/', (req,res)=>{
    res.render('../views/editStudent.ejs')
})
app.post('/', (req,res)=>{
    let obj = {}
    obj[first_name] = `${req.body.firstName}`
    db.Student.update(
        obj,
        {where: {id: itemId} })
    res.send('Student has been added successfully <br>'+'<a href="/students">Show All Data</a>')
})
module.exports = app;