const routes = require('express').Router();
const Controller = require('../controllers/controller')

routes.get('/',(req, res) => {//halaman utama
    res.render('index')
})

//============================TEACHER=====================================================//
routes.get('/teachers',(req,res) => {//menampilkan semua data teachers
    Controller.allTeachersData()
    .then(allTeachersData => {
        res.render('TeachersData',{allTeachersData})
    })
})

routes.get('/teachers/add',(req,res) => { 
    res.render('TeachersFormAddData')
})
routes.post('/teachers/add',(req,res) => {
    Controller.addTeacherData(req.body.first_name, req.body.last_name, req.body.email)
    .then(() => {
        Controller.allTeachersData()
        .then( () => {
            res.render('TeachersFormAddData')
        })
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/teachers/edit/:id',(req,res) => {
    Controller.findTeacher(req.params.id)
    .then(teacher => {
        res.render('TeachersEditDataForm',{teacher});
    })
    .catch(err => {
        console.log(err)
    })
})
routes.post('/teachers/edit/:id',(req,res) => {
    Controller.editTeacherData(req.params.id, req.body.first_name, req.body.last_name, req.body.email)
    .then(result =>{
        Controller.allTeachersData()
        .then(teacher => {
            res.render('TeachersEditDataForm',{teacher})
        })
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/teachers/delete/:id',(req,res) => {
    Controller.findTeacher(req.params.id)
    .then(teacher => {
        res.render('TeachersDeleteDataForm',{teacher});
    })
    .catch(err => {
        console.log(err)
    })
})
routes.post('/teachers/delete/:id',(req,res) => {
    Controller.deleteTeacher(req.params.id)
    .then(() =>{
        Controller.allTeachersData()
        .then(teacher => {
            res.render('TeachersDeleteDataForm',{teacher})
        })
    })
    .catch(err => {
        console.log(err)
    })
})
//============================TEACHER=====================================================//


//============================STUDENT=====================================================//
routes.get('/students',(req,res) => { 
    Controller.allStudentsData()
    .then(allStudentsData => {
        res.render('StudentsData',{allStudentsData})
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/students/add',(req,res) => { 
    res.render('StudentsFormAddData')
})
routes.post('/students/add',(req,res) => {
    Controller.addStudentData(req.body.first_name, req.body.last_name, req.body.email)
    .then(() => {
        Controller.allStudentsData()
        .then( () => {
            res.render('StudentsFormAddData')
        })
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/students/edit/:id',(req,res) => {
    Controller.findStudent(req.params.id)
    .then(student => {
        res.render('StudentsEditDataForm',{student});
    })
    .catch(err => {
        console.log(err)
    })
})
routes.post('/students/edit/:id',(req,res) => {
    Controller.editStudentData(req.params.id, req.body.first_name, req.body.last_name, req.body.email)
    .then(() =>{
        Controller.allStudentsData()
        .then(student => {
            res.render('StudentsEditDataForm',{student})
        })
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/students/delete/:id',(req,res) => {
    Controller.findStudent(req.params.id)
    .then(student => {
        res.render('StudentsDeleteDataForm',{student});
    })
    .catch(err => {
        console.log(err)
    })
})
routes.post('/students/delete/:id',(req,res) => {
    Controller.deleteStudent(req.params.id)
    .then(() =>{
        Controller.allStudentsData()
        .then(student => {
            res.render('StudentsDeleteDataForm',{student})
        })
    })
    .catch(err => {
        console.log(err)
    })
})
//============================STUDENT=====================================================//


//============================SUBJECT=====================================================//
routes.get('/subjects',(req,res) => { 
    Controller.allSubjectsData()
    .then(allSubjectsData => {
        res.render('SubjectsData',{allSubjectsData})
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/subjects/add',(req,res) => { 
    res.render('SubjectsFormAddData')
})
routes.post('/subjects/add',(req,res) => {
    Controller.addSubjectData(req.body.subject_name)
    .then(() => {
        Controller.allSubjectsData()
        .then( () => {
            res.render('SubjectsFormAddData')
        })
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/subjects/edit/:id',(req,res) => {
    Controller.findSubject(req.params.id)
    .then(subject => {
        res.render('SubjectsEditDataForm',{subject});
    })
    .catch(err => {
        console.log(err)
    })
})
routes.post('/subjects/edit/:id',(req,res) => {
    Controller.editSubjectData(req.params.id, req.body.subject_name)
    .then(() =>{
        Controller.allSubjectsData()
        .then(subject => {
            res.render('SubjectsEditDataForm',{subject})
        })
    })
    .catch(err => {
        console.log(err)
    })
})

routes.get('/subjects/delete/:id',(req,res) => {
    Controller.findSubject(req.params.id)
    .then(subject => {
        res.render('SubjectsDeleteDataForm',{subject});
    })
    .catch(err => {
        console.log(err)
    })
})
routes.post('/subjects/delete/:id',(req,res) => {
    Controller.deleteSubject(req.params.id)
    .then(() => {
        Controller.allSubjectsData()
        .then(subject => {
            res.render('SubjectsDeleteDataForm',{subject})
        })
    })
    .catch(err => {
        console.log(err)
    })
})
//============================SUBJECT=====================================================//


module.exports = routes
