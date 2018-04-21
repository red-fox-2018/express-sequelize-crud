const Model = require('../models')
const express = require('express')
const router = express()

router.set('views','./views/teacher')

router.get('/teachers',function(req,res){
    Model.Teacher.findAll()
    .then(function(teacher){
        res.render('teacher',{ teacherData:teacher})
    })
    .catch(function(err){
        res.render('teacher', err)
    })
})

router.get('/teachers/add',function(req,res){
    res.render('teacherAdd', { msg:false })
})

router.post('/teachers/add',function(req,res){
    Model.Teacher.create(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
    )
    .then(function(){
        res.redirect('/teachers')
    })
    .catch(function(err){
        res.render('teacherAdd',{ msg:true, errMessage: err.message})
    })
})

router.get('/teachers/edit/:id',function(req,res){
    let id = req.params.id
    Model.Teacher.findOne(
        {
            where: {
                id:id
            }
        }
    )
    .then(function(teacherUpdate){
        res.render('teacherEdit', { msg:false ,teacher:teacherUpdate, action:`/teachers/edit/${id}` })
    })
    .catch(function(err){
        res.render('teacherEdit',{ msg:true, errMessage: err.message })
    })
})

router.post('/teachers/edit/:id',function(req,res){
    let id = req.params.id
    let objteacher = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    }
    Model.Teacher.update(
        objteacher,
        {
            where: {
                id: id
            }
        }
    )
    .then(function(){
        res.redirect('/teachers')
    })
    .catch(function(err){
        res.render('teacherEdit',{ msg:true , errMessage:`Hi ${req.body.first_name} data km gagal diupdate. ${err.message}`,teacher:objteacher,action:`/teachers/edit/${id}`})
    })

})

router.get('/teachers/delete/:id',function(req,res){
    let id = req.params.id
    Model.Teacher.destroy(
        {
            where:{
                id:id
            }
        }
    )
    .then(function(){
        res.redirect('/teachers')
    })
})

module.exports = router