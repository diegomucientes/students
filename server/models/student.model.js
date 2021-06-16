const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
    Nombre:{
        type:String,
        required:[true,' El Nombre del alumno es obligatorio'],
        minlength:[3,'El nombre debe ser de al menos 3 caracteres']
    },
    Curso:{
        type:String,
        required:[true,'El curso del alumno es obligatorio']
    },
    Condicion:{
        type:String,
        required:[true,'La condición del alumno es obligatoria']
    },
    NumeroPadre:{
        type:Number,
        required:[true,'El numero del Padre es obligatorio']
    },
    NumeroMadre:{
        type:Number,
        required:[true,'El numero de la Madre es Obligatorio']
    },

  
},{timestamps:true});

module.exports.Student = mongoose.model('student',StudentSchema);