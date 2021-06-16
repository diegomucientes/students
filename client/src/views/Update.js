import React, { useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import axios from 'axios';
import StudentForm from '../components/StudentForm';

const Update = (props) => {
   let { id } = useParams();
   const [student,setStudent]=useState("");
   const [loaded, setLoaded] = useState(false);

   const history=useHistory();
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/student/'+id)
            .then(res => {
                
                setStudent(res.data);
                console.log(res.data)
                setLoaded(true);
                
            })
            .catch(err=>err)
    }, [id])
    const updateStudent = student => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/student/' + id, student)
            .then(res =>history.push("/students"))
            
    }
    return (
        <div>
            <h1>Editar un Estudiante</h1>
        {loaded && (
        <StudentForm
          onSubmitProp={updateStudent}
          iNombre={student.Nombre}
          iCurso={student.Curso}
          iCondicion={student.Condicion}
          iNumeroPadre={student.NumeroPadre}
          iNumeroMadre={student.NumeroMadre}
        />
      )}
    </div>
    )
}

export default Update;