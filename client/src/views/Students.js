import React,{useState,useEffect} from 'react';
import axios from 'axios';
import{Link}from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import '../styles/Students.css';


const CreateStudents = () => {

    const [students, setStudents] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/students')
            .then(res=>{
                setStudents(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom=(studentId)=>{
        setStudents(students.filter(student=>student._id !== studentId))
    }
     
    return (
        <div className="wrapper">
             <Link  to={'add'}><button type="button" className="btn btn-info m-1">Crear Estudiante</button></Link>
             <Link  to={'Home'}><button type="button" className="btn btn-info m-1">Volver</button></Link>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Condición</th>
                    <th scope="col">Número del Padre</th>
                    <th scope="col">Número de la Madre</th>
                </tr>
                </thead>
                <tbody>
                {students.map((student, index) => {
                    return (
                    <tr key={index}>
                        <td>{student.Nombre}</td>
                        <td>{student.Curso}</td>
                        <td>{student.Condicion}</td>
                        <td>{student.NumeroPadre}</td>
                        <td>{student.NumeroMadre}</td>
                        <td>
                            <Link  to={'student/'+student._id+'/update'}><button type="button" className="btn btn-info m-1">Editar Información</button></Link>
                            <DeleteButton studentId={student._id} successCallback={()=>removeFromDom(student._id)}></DeleteButton>
                        </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
      );
}

export default CreateStudents;

