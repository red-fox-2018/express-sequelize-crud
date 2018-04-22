const express = require('express');
const router = express()
const Models = require('../models')

Models.student.findAll()
.then(data=>{
    router.get('/', (req, res) => {
        res.render('students',{students:data})
    })
})
router.get('/add',(req,res)=>{
    res.render('student-add', { show: { message: '',succes:''} })
})
router.post('/add', (req, res) => {
    Models.student.create(req.body)
    .then(student => {
        res.render('student-add',{show: {message:'',succes:true}})
    })
    .catch(err => {
        res.render('student-add', {show:err})
    })
})
router.get('/edit/:id',(req,res)=>{
    Models.student.findOne(
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        res.render('student-edit', { show: { student: data, succes: '', message: '' } })
    })
    .catch(err => {
        console.log(err.message)
    })
    
})
router.post('/edit/:id', (req, res) => {
    Models.student.update(
        req.body,
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        res.render('student-edit', { show:{student: data, succes:data, message:'' }})
    })
    .catch(err => {
        res.render('student-edit', { show: { student: { id: req.params.id}, message:'false' }})
    })
    
})
router.get('/delete/:id',(req,res)=>{
    
    Models.student.destroy(
        {
            where:{id:req.params.id}
        }
    )
    .then(data => {
        res.redirect('/students')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router