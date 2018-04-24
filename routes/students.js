const express = require('express')
const routes = require('express').Router()
const Controller = require('../controllers/controller')
let model = require('../models')


routes.get('/',(req,res)=>{
	model.student.findAll({
		order: [
			['id','ASC']
		]
	})
	.then(student=>{
		res.render('studentsData',{student})
	})
})

routes.get('/add',(req,res)=>{
	res.render('studentsAdd')
})

routes.post('/add',(req,res)=>{
	model.student.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	})
	.then(()=>{
		model.student.findAll({
			order: [
				['id','ASC']
			]
		})
		.then(()=>{
			res.redirect('/students')
		})
	})
})
//edit

routes.get('/edit/:id',(req,res)=>{
	model.student.findById(req.params.id)
	.then(function(student){
		res.render('studentsEdit',{student})
	})
	.catch((err)=>{
		console.log(err);
	})
})

routes.post('/edit/:id',function(req,res){
	model.student.update({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	},{
		where:{id:req.params.id}
	})
	res.redirect('/students')
	.catch((err)=>{
		consoe.log(err)
	})
})
//delete

routes.get('/delete/:id',(req,res)=>{
	model.student.destroy({where:{id:req.params.id}})
	.then(student=>{
		res.redirect('/students')
	})
	.catch(err=>{
		console.log('err');
	})
})

module.exports = routes