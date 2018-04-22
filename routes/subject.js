
const express = require('express')
const router = express.Router()
const { SubjectController } = require('./../controllers');

// GET /subject | GET
router.get('/', (req, res) => {
  SubjectController
    .getAll()
    .then(subjects => {
      res.render('subject/page-subject', { subjects });
    }).catch(err => {
      console.log(err);
      res.redirect('/subject');
    });
});

// POST /subject | POST
router.post('/', (req, res) => {
  let values = {
    name: req.body.name,
  }
  SubjectController.insert(values)
    .then(() => {
      res.redirect('/subject');
    })
    .catch((err) => {
      console.log(err);
      res.redirect('/subject');
    })
});

// DELETE /subject/delete/:id | GET
router.get('/delete/:id', (req, res) => {
  let id = req.params.id;
  SubjectController.delete(id)
    .then(() => {
      res.redirect('/subject');
    })
    .catch(err => {
      res.redirect('./subject');
      console.log(err.message);
    })
});

// UPDATE /subject/update/:id | GET
router.get('/update/:id', (req, res) => {
  let id = req.params.id;
  SubjectController.findById(id)
    .then(subject => {
      res.render('subject/page-subject-edit', { subject });
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/subject');
    });
});

router.post('/update/:id', (req, res) => {
  let id = req.params.id;
  let name = req.body.name;

  SubjectController.update(id, { name })
    .then(() => {
      res.redirect('/subject');
    })
    .catch(err => {
      console.log(err.message);
      res.redirect('/subject');
    });
});

module.exports = router;