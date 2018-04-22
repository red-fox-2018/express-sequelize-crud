const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const model = require('./../models');
var Student = model.Student

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

function showError(message) {
  alert(message)
}

router.get('/', function (req, res) {
  console.log('enter Homepage');
  res.render('index');
})

router.get('/student', function (req, res) {
  console.log('enter Student Form');
  res.render('student-form')
})

router.post('/student', urlencodedParser, function (req, res, next) {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let gender = req.body.gender;
  let birthday = req.body.birthday;
  Student.create({
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthday: birthday,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then((newStudent) => {
    let fullName = newStudent.getFullName();
    // NOTE: how to show alert, value date not recognized
    // alert(`${fullName} successfully added`)
  })
  .catch((err) => {
    if (err) {
      // NOTE: error belum jalan
      let err = new Error('input cannot be empty')
      // return next(err);
      // showError(err)
    }
  })
  res.redirect('/student')
})

router.get('/teacher', function (req, res) {
  Student.findAll().then((students) => {
    res.render('teacher-page', {students: students})
  })
  console.log('enter Teacher page');
})

router.get('/teacher/student_id/:student_id', function (req, res) {
  let studentId = req.params.student_id
  Student.findById(studentId).then((student) => {
    // res.send(student.firstN)
    res.render('update_form', {student: student});
    router.post('/update', urlencodedParser, function (req, res) {
      let firstName = req.body.firstName;
      let lastName = req.body.lastName;
      let gender = req.body.gender;
      let birthday = req.body.birthday;
      Student.update({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthday: birthday,
        updatedAt: new Date()
      }, {
        where: {id: studentId}
      }).then(() => {
        res.redirect('/teacher')

      })
      // res.send(req.body)
    })
  })
})




module.exports = router
