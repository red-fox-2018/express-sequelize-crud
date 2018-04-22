var express = require('express')
var router = express.Router()
var model = require('../models')
var student = model.Student

router.get('/student',function(req,res){
    student.findAll().then(students=>{
        res.render('student',{name:"testing"})
        // console.log(students)
        // res.send(students) 
    })
})

router.post('/student/add',function(req,res){
    res.send('add student')
})

// router.get('/student/edit:id',function(req,res){
//     res.send('tampilin student each id')
// })

// router.post('/student/edit:id',function(req,res){
//     res.send('edit student')
// })









module.exports=(function(){
    return router
})