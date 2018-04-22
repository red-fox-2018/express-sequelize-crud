const { Teacher } = require('../models')

class TeacherController {
  static list(req, res){
    Teacher.findAll()
    .then( teachers => {
      res.render('teachers/list', {Teachers: teachers})
    })
  }

  static create_get(req, res){
    res.render('teachers/form')
  }

  static create_post(req, res){
    Teacher.create({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    })
    .then(() => {
      res.redirect('/teacher')
    })
  }

  static update_get(req, res){
    Teacher.findById(req.params.id)
    .then(teacher => {
      res.render('teachers/edit-form', {teacher: teacher})
    })
  }

  static update_post(req, res){
    Teacher.update({
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      email: req.body.email
    }, {where: {id: req.params.id}})
    .then(() => {
      res.redirect('/teacher')
    })
  }

  static delete(req, res){
    Teacher.destroy({
      where: {id: req.params.id}
    })
    .then( () => {
      res.redirect('/teacher')
    })
  }

}
module.exports = TeacherController
