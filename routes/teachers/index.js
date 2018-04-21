const teacher = require ('express').Router();
const { Teacher, Student, Subject} = require('../../models')

teacher.get('/', function(req, res){
  Teacher.findAll()
  .then( teachers => {
    res.render('teachers/list', {Teachers: teachers})
  })
})

teacher.get('/add-teacher', function(req, res){
  res.render('teachers/form')
})

module.exports = teacher;
