const app = require('express').Router();
const db = require('../models/index.js')

//Get student data
app.get('/', (req,res)=>{
    db.Student.findAll().then(students => {
        res.render('../views/student.ejs', {
            students: students
        })
    })
})
//Get add student data
app.get('/add',(req,res)=>{
    res.render('../views/addStudent.ejs')
})
app.post('/add', (req,res)=>{
    db.Student.create({
        first_name : `${req.body.firstName}`,
        last_name: `${req.body.lastName}`,
        email: `${req.body.e_mail}`,
        createdAt : new Date(),
        updatedAt : new Date()
    })
    res.send('Student has been added successfully <br>'+'<a href="/students">Show All Data</a>')
})

//get edit student data
app.get('/edit/:id', (req,res) => {
    db.Student.findById(req.params.id).then(student => {
        res.render('../views/editStudent.ejs', {
            student: student
        })
    })
})
app.post('/edit/:id', (req,res)=>{
    db.Student.update(
        {first_name : `${req.body.firstName}`,
        last_name :`${req.body.lastName}`,
        email : `${req.body.e_mail}`},
        {where: {id: req.params.id} })
    res.send('Student has been added successfully <br>'+'<a href="/students">Show All Data</a>')
})

// get delete student data
app.get('/delete/:id',(req,res) => {
    db.Student.destroy({where: {id: req.params.id}})
    res.redirect('/students')
})
module.exports = app;


// app.get('/', (req,res)=>{
//     res.render('../views/editStudent.ejs')
// })
// app.post('/', (req,res)=>{
//     let obj = {}
//     obj[first_name] = `${req.body.firstName}`
//     db.Student.update(
//         obj,
//         {where: {id: itemId} })
//     res.send('Student has been added successfully <br>'+'<a href="/students">Show All Data</a>')
// })