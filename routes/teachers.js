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
    res.render('teacher-add')
})
router.post('/add', (req, res) => {
    res.render('teacher-add')
    Models.teacher.create(req.body)
    .then(teacher => {
        console.log(teacher)
    })
    .catch(err => {
        console.log(err)
    })
})
router.get('/edit/:id',(req,res)=>{
    Models.teacher.findOne(
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        if(data==null){
        res.send('404-notFound')
        }
        res.render('teacher-edit',{teacher:data})
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
        
        res.render('teacher-edit', { teacher: data })
    })
    .catch(err => {
        console.log(err)
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