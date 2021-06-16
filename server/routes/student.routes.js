  
const StudentController = require('../controllers/student.controller');

module.exports = function(app){
    app.post('/api/student/add',StudentController.createStudent)
    app.get('/api/students/',StudentController.getAll)
    app.get('/api/student/:id', StudentController.getStudent);
    app.put('/api/student/:id', StudentController.updateStudent);
    app.delete('/api/student/:id', StudentController.deleteStudent); 

}







