const student = require ('express').Router();
const { Teacher, Student, Subject} = require('../../models')

student.get('/', function(req, res){
  Student.findAll()
  .then( students => {
    res.render('students/list', {Students: students})
  })
})

student.get('/add-student', function(req, res){
  res.render('students/form')
})

student.post('/add-student', function(req, res){
  Student.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email
  })
  .then(() => {
    res.redirect('/student')
  })
})

module.exports = student;
