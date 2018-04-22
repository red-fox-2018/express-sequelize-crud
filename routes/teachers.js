const express = require('express');
const router = express()
const Models = require('../models')

Models.teacher.findAll()
.then(data=>{
    router.get('/', (req, res) => {
        res.render('teachers',{teachers:data})
    })
})
router.get('/add',(req,res)=>{
    res.render('teacher-add', { show: { message: '', succes: '' } })
})
router.post('/add', (req, res) => {
    Models.teacher.create(req.body)
    .then(teacher => {
        res.render('teacher-add', { show: { message: '', succes: true } })
    })
    .catch(err => {
        res.render('teacher-add', { show: err })
    })
})
router.get('/edit/:id',(req,res)=>{
    Models.teacher.findOne(
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        res.render('teacher-edit', { show: { teacher: data, succes: '', message: '' } })
    })
    .catch(err => {
        console.log(err)
    })
    
})
router.post('/edit/:id', (req, res) => {
    Models.teacher.update(
        req.body,
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        res.render('teacher-edit', { show: { teacher: data, succes: data, message: '' } })
    })
    .catch(err => {
        res.render('teacher-edit', { show: { teacher: { id: req.params.id }, message: 'false' } })
    })
    
})
router.get('/delete/:id',(req,res)=>{
    Models.teacher.destroy(
        {
            where:{id:req.params.id}
        }
    )
    .then(data => {
        res.redirect('/teachers')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router