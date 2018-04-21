const subject = require('express').Router();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = require('../models');
const Subject = db.Subject;

subject.get('/', function (req, res) {
  res.render('index')
});
subject.get('/subjects', function (req, res) {
  Subject.findAll({ order: [['subject_name', 'ASC']] })
    .then(subjects => {
      res.render('listSubject', { subjects: subjects });
    })
    .catch(err => {
      res.render('errorPage')
    });
});
subject.get('/subjects/add', function (req, res) {
  res.render('addSubject');
});

subject.post('/subjects/add', urlencodedParser, function (req, res) {
  let subject = req.body;
  Subject.create({
    subject_name: subject.subject_name,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(
      subject => {
        res.redirect('/subjects');
      }
    )
    .catch(err => {
      res.render('errorPage')
    });
});
subject.get('/subjects/edit/:id', function (req, res) {
  let subjectId = req.params.id;
  Subject.findOne({ where: { id: subjectId } })
    .then(subject => {
      res.render('editSubject', subject.dataValues);
    })
    .catch(err => {
      res.render('errorPage')
    })
})
subject.post('/subjects/edit/:id', urlencodedParser, function (req, res) {
  let subject = req.body;
  let subjectId = req.params.id;
  Teacher.update(subject, { where: { id: subjectId } })
    .then(subjectData => {
      res.redirect('/subjects');
    })
    .catch(err => {
      res.render('errorPage')
    })
});
subject.get('/subjects/delete/:id', urlencodedParser, function (req, res) {
  let subjectId = req.params.id;
  Subject.destroy({ where: { id: subjectId } })
    .then(subjectData => {
      res.redirect('/subjects')
    })
    .catch(err => {
      res.render('errorPage')
    })
});

module.exports = subject