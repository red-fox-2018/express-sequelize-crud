const { Subject } = require('../models')

class SubjectController {
  static list(req, res){
    Subject.findAll()
    .then( subjects => {
      res.render('subjects/list', {Subjects: subjects})
    })
  }

  static create_get(req, res){
    res.render('subjects/form')
  }

  static create_post(req, res){
    Subject.create({
      subject_name: req.body.subjectname,
      email: req.body.email
    })
    .then(() => {
      res.redirect('/subject')
    })
  }

  static update_get(req, res){
    Subject.findById(req.params.id)
    .then(subject => {
      res.render('subjects/edit-form', {subject: subject})
    })
  }

  static update_post(req, res){
    Subject.update({
      subject_name: req.body.subjectname
    }, {where: {id: req.params.id}})
    .then(() => {
      res.redirect('/subject')
    })
  }

  static delete(req, res){
    Subject.destroy({
      where: {id: req.params.id}
    })
    .then( () => {
      res.redirect('/subject')
    })
  }

}
module.exports = SubjectController
