const {Student}=require('../models/student.model');

module.exports.createStudent=(request,response)=>{
    const {Nombre,Curso,Condicion,NumeroPadre,NumeroMadre}=request.body;
    Student.create({
        Nombre,Curso,Condicion,NumeroPadre,NumeroMadre
    })
    .then(student=>response.json(student))
    .catch(err=>response.status(400).json(err))
}

module.exports.getAll=(request,response)=>{
    Student.find({}).sort({Name: 1}).exec()
    .then(students=>response.json(students))
    .catch(err=>response.json(err))
}

module.exports.getStudent = (request, response) => {
    Student.findOne({_id:request.params.id})
        .then(student => response.json(student))
        .catch(err => response.status(400).json(err))
}

module.exports.updateStudent = (request, response) => {
    Student.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators:true,new:true})
        .then(updatedStudent => response.json(updatedStudent))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteStudent= (request, response) => {
    Student.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}