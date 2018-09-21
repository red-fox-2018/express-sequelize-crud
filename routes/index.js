const express = require('express')
const routes = require('express').Router()
const Controller = require('../controllers/controller')

routes.get('/',(req,res)=>{
	res.render('index')
})
module.exports = routes