const Model = require('../models')
const express = require('express')
const router = express()

router.set('views','./views/student')

router.get('/students',function(req,res){
    Model.Student.findAll()
    .then(function(student){
        res.render('student',{ studentData:student})
    })
    .catch(function(err){
        res.render('student', err)
    })
})

router.get('/students/add',function(req,res){
    res.render('studentAdd', { msg:false })
})

router.post('/students/add',function(req,res){
    Model.Student.create(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
    )
    .then(function(){
        res.redirect('/students')
    })
    .catch(function(err){
        res.render('studentAdd',{ msg:true, errMessage: err.message})
    })
})

router.get('/students/edit/:id',function(req,res){
    let id = req.params.id
    Model.Student.findOne(
        {
            where: {
                id:id
            }
        }
    )
    .then(function(studentUpdate){
        res.render('studentEdit', { msg:false ,student:studentUpdate, action:`/students/edit/${id}` })
    })
    .catch(function(err){
        res.render('studentEdit',{ msg:true, errMessage: err.message })
    })
})

router.post('/students/edit/:id',function(req,res){
    let id = req.params.id
    let objStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    }
    Model.Student.update(
        objStudent,
        {
            where: {
                id: id
            }
        }
    )
    .then(function(){
        res.redirect('/students')
    })
    .catch(function(err){
        res.render('studentEdit',{ msg:true , errMessage:`Hi ${req.body.first_name} data km gagal diupdate. ${err.message}`,student:objStudent,action:`/students/edit/${id}`})
    })

})

router.get('/students/delete/:id',function(req,res){
    let id = req.params.id
    Model.Student.destroy(
        {
            where:{
                id:id
            }
        }
    )
    .then(function(){
        res.redirect('/students')
    })
})

module.exports = router