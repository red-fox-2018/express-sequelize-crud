const routes = require ('express').Router();
const teacher = require ('./teachers');
const student = require ('./students');
const { Teacher, Student, Subject} = require('../models')

routes.get('/', function(req, res){
  res.render('home', {title: 'Web School'})
})

routes.use('/teacher', teacher)
routes.use('/student', student)


module.exports = routes;
