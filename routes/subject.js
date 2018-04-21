const Model = require('../models')
const express = require('express')
const router = express()

router.set('views','./views/subject')

router.get('/subjects',function(req,res){
    Model.Subject.findAll()
    .then(function(subject){
        res.render('subject',{ subjectData:subject})
    })
})

router.get('/subjects/add',function(req,res){
    res.render('subjectAdd')
})

router.post('/subjects/add',function(req,res){
    Model.Subject.create(
        {
            subject_name: req.body.subject_name,
        }
    )
    .then(function(){
        res.redirect('/subjects')
    })
})

router.get('/subjects/edit/:id',function(req,res){
    let id = req.params.id
    Model.Subject.findOne(
        {
            where: {
                id:id
            }
        }
    )
    .then(function(subjectUpdate){
        res.render('subjectEdit', {subject:subjectUpdate, action:`/subjects/edit/${id}` })
    })
})

router.post('/subjects/edit/:id',function(req,res){
    let id = req.params.id
    let objsubject = {
        subject_name: req.body.subject_name,
    }
    Model.Subject.update(
        objsubject,
        {
            where: {
                id: id
            }
        }
    )
    .then(function(){
        res.redirect('/subjects')
    })

})

router.get('/subjects/delete/:id',function(req,res){
    let id = req.params.id
    Model.Subject.destroy(
        {
            where:{
                id:id
            }
        }
    )
    .then(function(){
        res.redirect('/subjects')
    })
})

module.exports = router