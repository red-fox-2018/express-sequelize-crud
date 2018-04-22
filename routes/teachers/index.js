const teacher = require ('express').Router();
const TeacherController = require('../../controllers/teacher')

teacher.get('/', TeacherController.list)

teacher.get('/add-teacher', TeacherController.create_get)

teacher.post('/add-teacher', TeacherController.create_post)

teacher.get('/edit-teacher/:id', TeacherController.update_get)

teacher.post('/edit-teacher/:id', TeacherController.update_post)

teacher.get('/delete/:id', TeacherController.delete)

module.exports = teacher;
