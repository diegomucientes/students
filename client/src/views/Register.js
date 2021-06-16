import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useHistory,
  } from "react-router-dom";
import RegisterForm from '../components/RegisterForm';

const Register = () => {
    const history=useHistory();
    const [errors, setErrors] = useState([]); 

    const registerUser = user => {
        axios.post('/api/register', user)
            .then(res=>{
                console.log(res.data);
                history.push("/students");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            }) 
    }

    return (
        <div>
            {errors.map((err, index) => <div className="alert alert-danger" role="alert">{err}</div>)}
            <RegisterForm onSubmitProp={registerUser} iFirstName='' iLastName='' iEmail='' iPassword='' iConfirm='' />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3vNsxDBiB390Knjjmsika3HhiMf4be5ai7g&usqp=CAU"alt="teacher"></img>
        </div>
    );
}

export default Register;
