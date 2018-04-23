/*jshint esversion:6*/

const router = require('express').Router();
var bodyParser = require('body-parser');
const db = require('../models');
const app = require('express')();



router.get('/', (req, res) => {
  db.Teacher.findAll()
  .then(teachersData => {
    res.render('../views/listData.ejs',{datanyasiteachers:teachersData});
  });
});

router.get('/edit',(req,res)=>{
  res.render('../views/teacherEdit.ejs')
})
router.post('/edit',(req,res)=>{
  console.log(req.body);
  console.log('ASUW')
  // let firstname = req.body.first_name;
  // let lastname = req.body.last_name;
  // let email = req.body.email;
  // let teacher_id = req.body.teacherID;
  res.render('../views/teacherEdit.ejs');
});



module.exports = router
