const route = require('express').Router()
const { Teacher } = require('../models')

route.get('/', (req,res) => {
    Teacher.findAll ({
        raw:true
    })
    .then((teachers) => {
        res.render('./teacher/teacher', { teachers })
    })
    .catch((err) => {
        console.log(err);
        
    })
})

route.get('/add', (req,res) => {
    res.render('./teacher/teacherAdd')
})

route.post('/add', (req, res) => {
    Teacher.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then((newTeacher) => {
        res.redirect('./')
    })
    .catch((err) => {
        console.log(err);
        
    })
})

route.get('/edit/:id', (req,res) => {
    Teacher.findById(req.params.id)
    .then((teacher) => {
        res.render('./teacher/editTeacher', { teacher })
    })
})

route.post('/edit/:id', (req,res) => {

    Teacher.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }, {
        where: { id:req.params.id }
    })
    .then((edited) => {
        res.redirect('/teacher')
    })
    .cathc((err) => {
        console.log(err);
    })
})

route.get('/delete/:id', (req,res) => {

    Teacher.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((deleted) => {
        res.redirect('/teacher')
    })
})

module.exports = route