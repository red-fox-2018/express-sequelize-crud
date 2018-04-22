const routes = require ('express').Router();
const teacher = require ('./teachers');
const student = require ('./students');
const subject = require ('./subjects');

routes.get('/', function(req, res){
  res.render('home', {title: 'Web School'})
})

routes.use('/teacher', teacher)
routes.use('/student', student)
routes.use('/subject', subject)


module.exports = routes;
