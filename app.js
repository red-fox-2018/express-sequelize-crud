const express = require('express')
const app = express()
const model = require('./models')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get('/student', (req, res) => {
	model.Student.findAll()
		.then(students => {
			// console.log(students)
			res.render('students', {
				students: students
			})
		})
})

app.get('/student/add', (req,res) => {
	res.render('formStudent')
})

app.post('/student/add', (req,res) => {
	// console.log('>>>>>>>>>>>>',req.body)
	model.Student.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		email: req.body.email
	})
	.then(newStudent => {
		res.redirect('/student')
	})
	.catch(err => {
		res.send('ini erro', err)
	})
})

app.get('/student/edit/:id', (req,res) => {
	model.Student.findById(req.params.id)
	.then(student => {
		// console.log('ini hasil cari',data)
		res.render('editStudent', {
			student:student
		})
	})
})

app.post('/student/edit/:id', (req,res) => {
	model.Student.update(
		req.body,
		{where: {
			id: req.params.id
		}
	})
	.then(result => {
		res.redirect('/student')
	})
})

app.get('/student/delete/:id', (req,res) => {
	model.Student.destroy({where: {id:req.params.id}})
	.then(result => {
		res.redirect('/student')
	})
})

app.listen(3000, () => {
	console.log('berhasil running')
})