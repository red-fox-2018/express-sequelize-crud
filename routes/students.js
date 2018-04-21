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
    res.render('student-add')
})
router.post('/add', (req, res) => {
    res.render('student-add')
    Models.student.create(req.body)
    .then(student => {
        console.log(student)
    })
    .catch(err => {
        console.log(err)
    })
})
router.get('/edit/:id',(req,res)=>{
    Models.student.findOne(
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        if(data==null){
        res.send('404-notFound')
        }
        res.render('student-edit',{student:data})
    })
    .catch(err => {
        console.log(err)
    })
    
})
router.post('/edit/:id', (req, res) => {
    Models.student.update(
        req.body,
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        
        res.render('student-edit', { student: data })
    })
    .catch(err => {
        console.log(err)
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