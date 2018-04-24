var express = require('express');
var router = express.Router();
var model = require('../models')

var teacher = model.Teacher

router.get('/',function(req,res){
    teacher.findAll().then(teachers=>{
        res.render('teacher',{teachers:teachers})
    })
})

router.post('/',function(req,res){
    console.log("--------tes")
   teacher.create({first_name:req.body.firstname, last_name:req.body.lastname})
   
   .then(teacher=>{
    res.redirect('/teacher')
   })
})

router.get('/edit/:id',function(req,res){
    teacher.findById(req.params.id).then(teacher=>{
        res.render('teacherById',{teacher:teacher})
    })
})

router.post('/edit/:id',function(req,res){
    teacher.update(
        {
          first_name:req.body.first_name,
          last_name:req.body.last_name
        },
        {
          where:{
              id:Number(req.params.id)
            }
        }
    )
    .then(function(rowsUpdated){
        res.redirect('/teacher')
    })
})
 
router.get('/delete/:id',function(req,res){
    teacher.destroy({
        where:{
            id:req.params.id
        }
    })
    res.redirect('/teacher')
})

module.exports = router