import React,{ useEffect, useState }from 'react';
import axios from 'axios';
import {useParams,Link} from 'react-router-dom';


const Student = (props) => {

    let { id } = useParams();
    const [student, setstudent] = useState({});
    useEffect(() => {
        console.log({id})
        axios.get("http://localhost:8000/api/student/" + id)
       
            .then(res => setstudent({
                ...res.data
            }))
    }, [id])
    return (
        <div>
            <p>Nombre:{student.nombre}</p>
            <p>Curso:{student.curso}</p>
            <p>Condicion:{student.condicion}</p>
            <p>Numero Padre:{student.NumeroPadre}</p>
            <p>Número Madre:{student.NumeroMadre}</p>
            <button><Link to={`/Header`}>HOME</Link></button>
            <button><Link to={"/student/"+student._id+"/update"}>Actualizar condición del alumno</Link></button>
        </div>
    );
}

export default Student;