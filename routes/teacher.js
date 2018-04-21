const routes = require('express').Router();
const Controller = require('../controllers/teacher');

// Show Data Teacher
routes.get('/', (req, res) => {
  Controller.read_all((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.render('teachers/teacher', {
        teachers: data
      })
    }
  })
})

// Add Teacher
routes.get('/add', (req, res) => {
  res.render('teachers/add-teacher')
})

routes.post('/add', (req, res) => {
  Controller.add(req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
    if (!err) {
      res.redirect('/teachers');
    }
  })
})

// Edit Teacher
routes.get('/edit/:id', (req, res) => {
  Controller.read_one(req.params.id, (err, data) => {
    if (!err) {
      res.render('teachers/edit-teacher', {
        teacher: data
      })
    }
  })
})

routes.post('/edit/:id', (req, res) => {
  Controller.edit(req.params.id, req.body.first_name, req.body.last_name, req.body.email, (err, data) => {
    if (!err) {
      res.redirect('/teachers');
    }
  })
})

// Delete Teacher
routes.get('/delete/:id', (req, res) => {
  Controller.erase(req.params.id, (err, data) => {
    if(!err) {
      res.redirect('/teachers')
    }
  })
})

module.exports = routes;