const router = require('express').Router();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../models');
const Student = db.Student;

router.get('/', function (req, res) {
  res.render('index')
});
router.get('/students', function (req, res) {
  Student.findAll({ order: [['first_name', 'ASC']] })
    .then(students => {
      res.render('listStudents', { students: students });
    })
    .catch(err => {
      res.render('errorPage')
    });
});
router.get('/students/add', function (req, res) {
  res.render('addStudent');
});

router.post('/students/add', urlencodedParser, function (req, res) {
  let student = req.body;
  Student.create({
    first_name: student.first_name,
    last_name: student.last_name,
    email: student.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(
      student => {
        res.redirect('/students');
      }
    )
    .catch(err => {
      res.render('errorPage')
    });
});
router.get('/students/edit/:id', function (req, res) {
  // console.log(req.params)
  let studentId = req.params.id;
  Student.findOne({ where: { id: studentId } })
    .then(student => {
      res.render('editStudent', student.dataValues);
    })
    .catch(err => {
      res.render('errorPage')
    })
})
router.post('/students/edit/:id', urlencodedParser, function (req, res) {
  let student = req.body;
  let studentId = req.params.id;
  Student.update(student, { where: { id: studentId } })
    .then(studentData => {
      res.redirect('/students');
    })
    .catch(err => {
      console.log(err.errors[0].message);
    })
});
router.get('/students/delete/:id', urlencodedParser, function (req, res) {
  let studentId = req.params.id;
  Student.destroy({ where: { id: studentId } })
    .then(studentData => {
      res.redirect('/students')
    })
    .catch(err => {
      res.render('errorPage')
    })
});

module.exports = router