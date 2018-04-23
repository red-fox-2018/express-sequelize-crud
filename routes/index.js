const express = require('express')
const routes = require('express').Router()
const Controller = require('../controllers/controller')

routes.get('/',(req,res)=>{
	res.render('index')
})

//teacher
routes.get('/teachers',(req,res)=>{ //menampilkan semuathearcher
	Controller.showAllTeacher()
	.then(showAllTeacher =>{
		res.render('teachersData',{showAllTeacher})
	})
})
routes.get('/teachers/add',(req,res)=>{
	res.render('teachersAdd')
})
routes.post('/teachers/add',(req,res)=>{
	Controller.addTeacher(req.body.firstName, req.body.lastName, req.body.email)
	.then(()=>{
		Controller.showAllTeacher()
		.then(()=>{
			res.render('teachersAdd')
		})
	})
	.catch((err)=>{
		console.log(err);
	})
})

routes.get('/teachers/edit/:id',(req,res)=>{
	Controller.findTeacher(req.params.id)
	.then(teacher =>{
		res.render('teachersEdit',{teacher})
	})
	.catch((err)=>{
		console.log(err);
	})
})

routes.post('/teachers/edit/:id',(req,res)=>{
	Controller.editTeacher(req.params.id,req.body.firstName,req.body.lastName,req.body.email)
	.then(result =>{
		console.log('---',result);
		Controller.showAllTeacher()
		.then(teacher =>{
			res.render('teachersEdit',{teacher})
		})
	})
	.catch(err =>{
		console.log(err);
	})
})









module.exports = routes