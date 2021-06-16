import React,{useState,useEffect} from 'react';
import StudentForm from '../components/StudentForm';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";



const Addstudent = () => {
    const [students, setStudents] = useState([]);
    const history=useHistory();
  

    const createStudent= student => {
        axios.post('http://localhost:8000/api/student/add', student)
            .then(res=>{
                setStudents([...students, res.data]);
                console.log(res);
                history.push("/students");
            })

    }

    return (
        <div>
            <StudentForm onSubmitProp={createStudent} iNombre=" " iCurso=" " iCondicion=" "iNumeroPadre=" "iNumeroMadre=" "/>
        </div>
    );
}

export default Addstudent;