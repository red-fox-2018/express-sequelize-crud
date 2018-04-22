const { Student } = require('../models')

class StudentController {
  static list(req, res){
    Student.findAll()
    .then( students => {
      res.render('students/list', {Students: students})
    })
  }

  static create_get(req, res){
    res.render('students/form')
  }

  static create_post(req, res){
    Student.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    })
    .then(() => {
      res.redirect('/student')
    })
  }

  static update_get(req, res){
    Student.findById(req.params.id)
    .then(student => {
      res.render('students/edit-form', {student: student})
    })
  }

  static update_post(req, res){
    Student.update({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    }, {where: {id: req.params.id}})
    .then(() => {
      res.redirect('/student')
    })
  }

  static delete(req, res){
    Student.destroy({
      where: {id: req.params.id}
    })
    .then( () => {
      res.redirect('/student')
    })
  }

}
module.exports = StudentController
