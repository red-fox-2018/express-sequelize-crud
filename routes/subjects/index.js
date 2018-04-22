const subject = require ('express').Router();
const SubjectController = require('../../controllers/subject')

subject.get('/', SubjectController.list)

subject.get('/add-subject', SubjectController.create_get)

subject.post('/add-subject', SubjectController.create_post)

subject.get('/edit-subject/:id', SubjectController.update_get)

subject.post('/edit-subject/:id', SubjectController.update_post)

subject.get('/delete/:id', SubjectController.delete)

module.exports = subject;
