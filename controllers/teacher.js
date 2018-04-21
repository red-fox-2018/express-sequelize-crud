
const { Teacher } = require('./../models');

class TeacherController {
  static getAll() {
    return Teacher.findAll();
  }
  static insert(values) {
    return Teacher.create(values);
  }
  static delete(id) {
    return Teacher.findById(id)
      .then(teacher => {
        return teacher.destroy();
      })
      .catch(err => {
        console.log(err.message);
      });
  }
  static findById(id) {
    return Teacher.findById(id);
  }
}

module.exports = TeacherController;
