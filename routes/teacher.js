const teacher = require('express').Router();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../models');
const Teacher = db.Teacher;

teacher.get('/', function (req, res) {
  res.render('index')
});
teacher.get('/teachers', function (req, res) {
  Teacher.findAll({ order: [['first_name', 'ASC']] })
    .then(teachers => {
      res.render('listTeachers', { teachers: teachers });
    })
    .catch(err => {
      res.render('errorPage')
    });
});
teacher.get('/teachers/add', function (req, res) {
  res.render('addTeacher');
});

teacher.post('/teachers/add', urlencodedParser, function (req, res) {
  let teacher = req.body;
  Teacher.create({
    first_name: teacher.first_name,
    last_name: teacher.last_name,
    email: teacher.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(
      teacher => {
        res.redirect('/teachers');
      }
    )
    .catch(err => {
      res.render('errorPage')
    });
});
teacher.get('/teachers/edit/:id', function (req, res) {
  let teacherId = req.params.id;
  Teacher.findOne({ where: { id: teacherId } })
    .then(teacher => {
      res.render('editTeacher', teacher.dataValues);
    })
    .catch(err => {
      res.render('errorPage')
    })
})
teacher.post('/teachers/edit/:id', urlencodedParser, function (req, res) {
  let teacher = req.body;
  let teacherId = req.params.id;
  Teacher.update(teacher, { where: { id: teacherId } })
    .then(teacherData => {
      res.redirect('/teachers');
    })
    .catch(err => {
      console.log(err.errors[0].message);
    })
});
teacher.get('/teachers/delete/:id', urlencodedParser, function (req, res) {
  let teacherId = req.params.id;
  Teacher.destroy({ where: { id: teacherId } })
    .then(teacherData => {
      res.redirect('/teachers')
    })
    .catch(err => {
      res.render('errorPage')
    })
});

module.exports = teacher