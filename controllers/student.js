const { Student } = require('../models')
const model = require('../models');

class StudentController {

  static getStudents(req, res){
      model.Student.findAll({raw:true})
      .then(function(student_data){
          res.render('students', {student_data});
      })
  }

  static getAdd(req, res){
    res.render('add-student');
  }

  static postAdd(req, res){
    model.Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    })
    .then(responds => res.redirect('/students'))
  }

  static getEditStudent(req, res){
      let newId = parseInt(req.params.id);
      model.Student.findOne({
          where: {
              id: newId
          }
      })
      .then(function(student_data){
          res.render('edit-student', {student_data});
      })
  }

  static postEditStudent(req, res){
      let id = parseInt(req.params.id);
      model.Student.update({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
      },{
          where: {id: id}
      })
      .then(responds => res.redirect('/students'))
  }

  static deleteStudent(req, res){
      let id = parseInt(req.params.id);
      console.log(id)
      model.Student.destroy({
          where: {
              id: id
          }
      })
      .then(responds => res.redirect('/students'))
  }

}
module.exports = StudentController
