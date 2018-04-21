const express = require('express');
const router = express()
const Models = require('../models')

Models.subject.findAll()
.then(data=>{
    router.get('/', (req, res) => {
        res.render('subjects',{subjects:data})
    })
})
router.get('/add',(req,res)=>{
    res.render('subject-add')
})
router.post('/add', (req, res) => {
    res.render('subject-add')
    Models.subject.create(req.body)
    .then(subject => {
        console.log(subject)
    })
    .catch(err => {
        console.log(err)
    })
})
router.get('/edit/:id',(req,res)=>{
    Models.subject.findOne(
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        if(data==null){
        res.send('404-notFound')
        }
        res.render('subject-edit',{subject:data})
    })
    .catch(err => {
        console.log(err)
    })
    
})
router.post('/edit/:id', (req, res) => {
    Models.subject.update(
        req.body,
        {
            where: { id: req.params.id }
        }
    ).then(data => {
        
        res.render('subject-edit', { subject: data })
    })
    .catch(err => {
        console.log(err)
    })
    
})
router.get('/delete/:id',(req,res)=>{
    Models.subject.destroy(
        {
            where:{id:req.params.id}
        }
    )
    .then(data => {
        res.redirect('/subjects')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router