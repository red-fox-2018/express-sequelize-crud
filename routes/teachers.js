const express = require('express')
const routes = require('express').Router()
const Controller = require('../controllers/controller')
let model = require('../models')
//show data
routes.get('/',(req,res)=>{
	model.Teacher.findAll({
			order: [
				['id','ASC']
			]
	})
	.then(teacher=>{
		console.log(teacher);
		res.render('teachersData',{teacher})
	})
})

//add data
routes.get('/add',(req,res)=>{
	res.render('teachersAdd')
})
routes.post('/add',(req,res)=>{
	model.Teacher.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	})
	.then(()=>{
		model.Teacher.findAll({
			order: [
				['id','ASC']
			]
		})
		.then(()=>{
			res.redirect('/teachers')
		})
	})
	.catch((err)=>{
		console.log(err);
	})
})

//edit data

routes.get('/edit/:id',function(req,res){
	model.Teacher.findById(req.params.id)
	.then(function(teacher){
		res.render('teachersEdit',{teacher})
	})
	.catch((err)=>{
		console.log(err);
	})
})

routes.post('/edit/:id',function(req,res){
	model.Teacher.update({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	},
	{where:{id:req.params.id}})
	res.redirect('/teachers')
	.catch(err=>{
		console.log(err);
	})
})

//delete
routes.get('/delete/:id',(req,res)=>{
	let id = req.params.id
	Controller.deleteTeacher(id)
	.then(teacher =>{
		res.redirect('/teachers')
	})
	.catch(err=>{
		console.log(err);
	})
})

routes.get('/delete/:id',(req,res)=>{
	model.Teacher.destroy({where:{id:req.params.id}})
})
module.exports = routes