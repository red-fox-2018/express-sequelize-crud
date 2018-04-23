const { Teacher } = require('../models')
const model = require('../models')

class TeacherController{
  static getAllTeachers(req,res){
      model.Teacher.findAll()
      .then(function(teacher_data){

          res.render('teachers', {teacher_data});
      })
  }

  static getAddTeacher(req, res){
      res.render('add-teacher');
  }

  static postAddTeacher(req, res){
      model.Teacher.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email
      })
      .then(responds => res.redirect('/teachers'))
  }

  static getEditTeacher(req, res){
      let id = parseInt(req.params.id);
      model.Teacher.findOne({
          where: {
              id: id
          }
      })
      .then(function(teacher_data){
          res.render('edit-teacher', {teacher_data});
      })
  }

  static postEditTeacher(req, res){
      let id = parseInt(req.params.id);
      model.Teacher.update({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
      },{
          where: {id: id}
      })
      .then(responds => res.redirect('/teachers'))
  }

  static getDeleteTeacher(req, res){
      let id = parseInt(req.params.id);
      model.Teacher.destroy({
          where: {
              id: id
          }
      })
      .then(responds => res.redirect('/teachers'))
  }
}

module.exports = TeacherController
