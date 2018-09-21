let model = require('../models')
class Controller{
	static showAllTeacher(){
		return model.Teacher.findAll({
			order: [
				['id','ASC']
			]
		})
	}
	static addTeacher(firstName,lastName,email){
		let input = model.Teacher.create({
			firstName : firstName,
			lastName : lastName,
			email : email
		})
		return input
	}
	static findTeacher(id){
		return model.Teacher.findById(id)
	}
	static editTeacher(id,firstName,lastName,email){
		let edit = model.Teacher.update({
			firstName: firstName,
			lastName: lastName,
			email: email
		},
		{where:{id:id}})
	}
	static deleteTeacher(id){
		let remove = model.Teacher.destroy({where:{id:id}})
		return remove
	}
	static showAllStudents(){
		return model.student.findAll({
			order: [
				['id','ASC']
			]
		})
	}
	static addStudent(firstName,lastName,email){
		let input = model.student.create({
			firstName: firstName,
			lastName: lastName,
			email: email
		})
	}
	static findStudent(id){
		return model.student.findById(id)
	}
	static editStudent(id,firstName,lastName,email){
		let edit = model.student.update({
			firstName: firstName,
			lastName: lastName,
			email: email
		},
		{where:{id:id}})
	}
	static deleteStudent(id){
		let remove = model.student.destroy({where:{id:id}})
		return remove
	}
}

module.exports = Controller