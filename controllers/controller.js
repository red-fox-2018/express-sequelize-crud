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
			email: email,
		},
		{where:{id:id}})
	}
}

module.exports = Controller