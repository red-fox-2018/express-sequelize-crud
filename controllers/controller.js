const Model = require('../models')


class Controller{
    //===============Teacher===============//
    static allTeachersData(){
        return Model.Teacher.findAll({
            order: [
                ['id', 'ASC']
              ]
        });
    }

    static addTeacherData(first_name, last_name, email){
        let input = Model.Teacher.create({first_name: first_name, last_name: last_name, email: email});
        return input;
    }

    static findTeacher(id){
        return Model.Teacher.findById(id);
    }

    static editTeacherData(id, first_name, last_name, email){
        let edit = Model.Teacher.update({first_name: first_name, last_name: last_name, email: email},{where:{id: id}});
        return edit;
    }

    static deleteTeacher(id){
        let remove = Model.Teacher.destroy({where: {id: id}});
        return remove;
    }
    //=====================================//


    //===============Student===============//
    static allStudentsData(){
        return Model.Student.findAll({
            order: [
                ['id', 'ASC']
              ]
        });
    }

    static addStudentData(first_name, last_name, email){
        let input = Model.Student.create({first_name: first_name, last_name: last_name, email: email});
        return input;
    }

    static findStudent(id){
        return Model.Student.findById(id);
    }

    static editStudentData(id, first_name, last_name, email){
        let edit = Model.Student.update({first_name: first_name, last_name: last_name, email: email},{where:{id: id}});
        return edit;
    }

    static deleteStudent(id){
        let remove = Model.Student.destroy({where: {id: id}});
        return remove;
    }
    //=====================================//


    //===============Subject===============//
    static allSubjectsData(){
        return Model.Subject.findAll({
            order: [
                ['id', 'ASC']
              ]
        });
    }

    static addSubjectData(subject_name){
        let input = Model.Subject.create({subject_name: subject_name});
        return input;
    }

    static findSubject(id){
        return Model.Subject.findById(id);
    }

    static editSubjectData(id, subject_name){
        let edit = Model.Subject.update({subject_name: subject_name},{where:{id: id}});
        return edit;
    }

    static deleteSubject(id){
        let remove = Model.Subject.destroy({where: {id: id}});
        return remove;
    }
    //=====================================//
}


module.exports = Controller