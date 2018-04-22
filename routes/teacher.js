const route = require('express').Router()
const {Teacher} = require('../models')

route.get('/', (req, res) => {
  Teacher.findAll()
  .then((teachers) => {
    res.render('teacher', {teacherData: teachers})
  })
})

route.get('/add', (req, res) => {
  res.render('form_teacher')
})

route.post('/add', (req, res) => {
  Teacher.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  })
  .then((newTeacher) => {
    res.redirect('/')
  })
  .catch((err) => {
    res.render('form_teacher', {message: err})
  })
})

route.get('/edit/:id', (req, res) => {
  Teacher.findById(req.params.id)
  .then((teacher) => {
    res.render('edit_form_teacher', {teacherData: teacher})
  })
})

route.post('/edit/:id', (req, res) => {
  Teacher.findById(req.params.id)
  .then((teacher) => {
    teacher.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    })
    .then((edited) => {
      res.redirect('/')
    })
    .catch((err) => {
      res.render('/edit/:id')
    })
  })
})

route.get('/delete/:id', (req, res) => {
  Teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((deleted) => {
    res.redirect('/')
  })
})

module.exports = route
