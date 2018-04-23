const express = require('express');
const router = express()
const Model = require('../models');

router.set("view engine", "ejs")


class Controller {
  constructor() {

  }

  static showAllStudents(req, res){

    Model
      .Student.findAll()

        .then(data_students => {
          res.render('students/students', {data_students})
        })

        .catch(err => {
          res.send(data)
        })

  }

  static getAddStudent(req, res){
    res.render('students/add_students')
  }

  static addStudents(req, res){

    const new_student = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }

    Model.Student.create(new_student)

    .then(response => {
      res.redirect('/students')
    })

  }

  static getEditStudent(req, res){

    Model
    .Student
    .findById(req.params.id)
    .then(student => res.render('students/edit_student', { student }))

  }

  static editStudents(req, res){

    const edit_students = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    }

    let ids = req.body.id

    Model
      .Student
      .update(edit_students, {where: {id: req.body.id}})

    .then(updated => {
      res.redirect('/students')
    })

  }

  static deleteStudent(req, res){

    Model
      .Student
      .destroy({ where: { id: req.params.id } })

    .then(response => {
      res.redirect('/students')
    })

  }

  static showAllTeachers(req, res){

    Model
      .Teacher.findAll()

        .then(data_teacher => {
          res.render('teacher/teacher', {data_teacher})
        })

        .catch(err => {
          res.send(data)
        })

  }

  static getAddTeacher(req, res){
    res.render('teacher/add_teacher')
  }

  static addTeachers(req, res){

    const new_teacher = {
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }

    Model.Teacher.create(new_teacher)

    .then(response => {
      res.redirect('/teacher')
    })

  }

  static getEditTeacher(req, res){

    Model
    .Teacher
    .findById(req.params.id)
    .then(teacher => res.render('teacher/edit_teacher', { teacher }))

  }

  static editTeacher(req, res){

    const edit_teacher = {
      first_name: req.body.first_name,
      last_name: req.body.last_name
    }

    let ids = req.body.id

    Model
      .Teacher
      .update(edit_teacher, {where: {id: req.body.id}})

    .then(updated => {
      res.redirect('/teacher')
    })

  }

  static deleteTeacher(req, res){

    Model
      .Teacher
      .destroy({ where: { id: req.params.id } })

    .then(response => {
      res.redirect('/teacher')
    })

  }

  static showAllSubjects(req, res){

    Model
      .Subject.findAll()

        .then(data_subject => {
          res.render('subject/subject', {data_subject})
        })

        .catch(err => {
          res.send(data)
        })

  }

  static getAddSubject(req, res){
    res.render('subject/add_subject')
  }

  static addSubject(req, res){

    const new_subject = {
      subject_name: req.body.subject_name
    }

    Model.Subject.create(new_subject)

    .then(response => {
      res.redirect('/subject')
    })

  }

  static getEditSubject(req, res){

    Model
    .Subject
    .findById(req.params.id)
    .then(subject => res.render('subject/edit_subject', { subject }))

  }

  static editSubject(req, res){

    const edit_subject = {
      subject_name: req.body.subject_name
    }

    let ids = req.body.id

    Model
      .Subject
      .update(edit_subject, {where: {id: req.body.id}})

    .then(updated => {
      res.redirect('/subject')
    })

  }

  static deleteSubject(req, res){

    Model
      .Subject
      .destroy({ where: { id: req.params.id } })

    .then(response => {
      res.redirect('/subject')
    })

  }

}

module.exports = Controller;
