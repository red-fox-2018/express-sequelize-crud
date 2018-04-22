var express = require('express')
var router = express.Router()
var model = require('../models')
const ejs = require('ejs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
var teacher = model.Teacher

router.get('/teacher',function(req,res){
    // res.send(" KENAPA SIH")
    teacher.findAll().then(teachers=>{
        res.render('teacher',{teachers:teachers})
    })
})

//aaa

router.post('/teacher',function(req,res){
   var newTeacher = {
       first : req.body.firstname,
       last : req.body.lastname
   }
   teacher.create()
   res.render('teacher',{
       newTeacher:newTeacher
   })

})



module.exports = router